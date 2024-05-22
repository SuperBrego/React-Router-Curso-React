import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export default function Info(): ReactElement {
    const { id } = useParams();

    return <>
    <p>Mais informações do item ${id}.</p>
    </>;
}