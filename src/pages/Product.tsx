import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Product(): ReactElement {
    const { id } = useParams();

    // Carregar dado individual
    const { data: product, loading, errors } = useFetch(`http://localhost:3000/products/${id}`);

    return <>
        <p><b>ID do Produto:</b> {id}</p>
        {errors && <p>Ocorreu um erro ao carregar o item.</p>}
        {loading && <p>Carregando...</p>}
        {product && <>
        <div>
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            {/* Nested Route */}
            <Link to={`/products/${product.id}/info`}>Mais informações...</Link>
        </div>
        </>}
    </>;
}