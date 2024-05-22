import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [config, setConfig] = useState<any>(null);
    const [method, setMethod] = useState<string>('');
    const [callFetch, setCallFetch] = useState<boolean>(false);
    
    // para deleção
    const [itemID, setItemID] = useState<number|null>(null);

    // Loading
    const [loading, setLoading] = useState<boolean>(false);
    
    // Erros
    const [errors, setErrors] = useState<string>('');
    
    // Configurando o Post.
    const httpConfig = (data: any, method: string) => {
        if(method === 'POST') {
            setConfig({
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            });
            
            setMethod(method);
        } 
        // Remoção de Item
        else if(method === 'DELETE') {
            setConfig({
                method: 'DELETE',
                headers: {
                    "Content-type": "application/json"
                },
            });
            
            setMethod(method);
            setItemID(data);
        }
    }
    
    // Fetch Data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const res = await fetch(url);
                const json = await res.json();
                
                setData(json);
                
            } catch (error: any) {
                setErrors(`Houve algum um erro ao carregar os dados: ` + error.message);
            }
            
            setLoading(false);
        }
        
        fetchData();
    }, [url, callFetch]);
    
    // Refatorando o Post.
    useEffect(() => {
        let json = false;

        const httpRequest = async () => {
            if(method === 'POST') {
                const res = await fetch(url, config);
                
                json = await res.json()
                
            }
            else if(method === 'DELETE') {
                const deletetionURL = `${url}/${itemID}`;
                
                const res = await fetch(deletetionURL, config);
                
                json = await res.json()
            }
            
            setCallFetch(json);
        }
        
        httpRequest();
    }, [config, method, url]);
    
    return { data, httpConfig, loading, errors };
}