import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/" className='app--logo'>Caravan World</Link>
            <nav>
            <Link to="/about">About</Link>
        </nav>
      </header>
    )
}