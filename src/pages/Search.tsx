import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Search(): ReactElement {
    let [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams;

    const { data: items, loading, errors } = useFetch(url);

    console.log(items)

    return <>
    <div>
        <h1>Resultados disponíveis</h1>
        {loading && <p>Carregando pesquisa...</p>}
        {errors && <p>Nenhum resultado encontrado.</p>}
        {items && <ul className="products">
        {items.map((elem: any, index: number) => <li key={index}>
            <h3>{elem.name}</h3>
            <p>R$ {elem.price}</p>
        </li>)}
        </ul>}
    </div>
    </>;
}