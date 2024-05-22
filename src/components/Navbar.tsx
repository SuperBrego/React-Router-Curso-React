import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar(): ReactElement {
    return <>
    <nav className="navbar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
    </nav>
    </>;
}