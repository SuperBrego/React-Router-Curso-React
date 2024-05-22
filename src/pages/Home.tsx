import { ReactElement } from "react";
import { useFetch } from "../hooks/useFetch";
import './Home.css'
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function Home(): ReactElement {
  
  const url = 'http://localhost:3000/products';
  
  const { data: items, errors, loading } = useFetch(url);
  
  return <>
  <div className="Home">
    <h2>Produtos</h2>
    {errors && <p>{errors}</p>}
    {loading && <p>Carregando dados...</p>}
    {!loading && <>
    <ul className="products">
      {items && items.map((elem: Product, index: number) => <li key={index}>
          <h3>{elem.name}</h3>
          <p>R$ {elem.price}</p>
          <Link to={`/products/${elem.id}`}>Detalhes</Link>
      </li>)}
    </ul>
    </>}
    </div>
    </>;
  }