import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Header(props){

    return (

        <header 
            className={props.darkMode ? "dark--header" : "light--header"}
        >

            <h1 
                className={props.darkMode ? "dark--title" : "light--title"}
            >
                Where in the world?
            </h1>
            
            
            <div 
                onClick={props.handleClick} 
                className={props.darkMode ? "dark--btn" : "light--btn"}
            >
            <FontAwesomeIcon icon={faMoon} />
                {props.darkMode? "Light Mode" : "Dark Mode"}
            </div>
            
        </header>

    )
}