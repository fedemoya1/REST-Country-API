import React from "react"

export default function Main(props){

    return (
        <div 
            className={props.darkMode? "dark--block" : "light--block"}
            //className="--block"
            onClick={props.handleClick}
        >
            <img 
                src={props.img} 
                className="--flag" 
                alt="Flag"
            />
            <h2 className="--land">{props.country}</h2>
            <ul className="--list">
                <li><span>Population:</span> {props.population}
                </li>
                <li><span>Region:</span> {props.region}
                </li>
                <li><span>Capital:</span> {props.capital}
                </li>
            </ul>
        </div>
    )
}