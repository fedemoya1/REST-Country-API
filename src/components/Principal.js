import React from "react"
import {nanoid} from "nanoid"

export default function Principal(props){

    const native = [];
    const curren = [];
    const lang = [];

    for (let key in props.native) {
        native.push(props.native[key])
    }

    for (let key in props.currencies) {
        curren.push(props.currencies[key])
    }

    for (let key in props.languages) {
        lang.push(props.languages[key])
    }
      
    var limites = props.border.map( con => {

        return(
            <li 
                key={nanoid()}
                className={props.darkMode ? "dark-li" : "light-li"}
                //codigo nuevo
                onClick={(e) => props.handleClickMe(e)}
                //fin codigo nuevo
            >
                {con}
            </li>
        )
    })

    return(
        <div 
            className={props.darkMode? "dark--territory" : "light--territory"}
        >
            <img 
                src={props.img} 
                className={props.darkMode? "--flag --solo-dark" : "--flag --solo-light"} 
                alt="Flag"
            />
            <div className = "--final-block">
                <h2 className="--land">{props.country}</h2>
                <div className="--dividis">
                    <ul className="--list">
                        <li><span>Native Name:</span> {native.length === 0 ? "N/A" : native[0].common}
                        </li>
                        <li><span>Population:</span> {props.population.toLocaleString()}
                        </li>
                        <li><span>Region:</span> {props.region}
                        </li>
                        <li><span>Sub Region:</span> {props.sub}
                        </li>
                        <li><span>Capital:</span> {props.capital}
                        </li>
                    </ul>

                    <ul className="--list">
                        <li><span>Top Level Domain:</span> {props.domain}
                        </li>
                        <li><span>Currencies:</span> {curren.length === 0 ? "N/A" : curren[0].name}
                        </li>
                        <li><span>Languages:</span> {lang.length === 0 ? "N/A" : lang.join(", ")}
                        </li>
                    </ul>
                </div>
                    <ul className="--list --borders">
                        <p>Border Countries:</p>
                        {limites}
                    </ul>
                </div>
                        
            </div>
            )
        }
