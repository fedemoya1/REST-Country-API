import React from "react"

export default function Nav(props){
    
    //onChange={(e)=>props.changeCountry(e, set)} 
    //onChange={(e)=>props.changeCountry(e, set)}
    return(

        <nav
            className={props.darkMode? "dark--nav" : "light--nav"}
        >
            
            <input 
                id="country"
                name="pais" 
                type="text"
                placeholder="Search for a country..."
                className={props.darkMode? "dark--inp" : "light--inp"}
                onChange={props.changeCountry} 
            />

            <select
                id="continent"
                name="continent"
                className={props.darkMode? "dark--sel" : "light--sel"}
                onChange={props.changeCountry} 
            >
                <option value="all">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </nav>

    )
}