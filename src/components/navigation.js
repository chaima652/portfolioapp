import React, { useState} from "react";
import MenuConent from "./MenuConent";
import "./Navigation.css";
 
const Navigation = () => {
    const [active] = useState(false);

    return(
        <nav className="navbar">
            <h1 className="navbar-logo">
                React
            </h1>
            <ul className={active ? 'nav-menu' : 'nev-menu'}>
                {MenuConent.map((item, index) => {
                    return(
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button className="button">Sing Up</button>
        </nav>
        

    )
   
}
 
export default Navigation;