import React from "react";
import { Link } from "react-router-dom";
import './styles/header.css';


export default function Header() {
    const logOut = ()=> {
        sessionStorage.removeItem('accessJWT')
    };
    return (
        <div className="header-background">
            <p className="header-text">Epower Blog</p>
            <Link to="/" className="header-text" onClick={logOut}>Logout</Link>
        </div>
    );
  }