import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): ReactElement {
    return <>
    <p>Página não encontrada</p>
    <p><Link to={'/'}>Voltar</Link></p>
    </>
}