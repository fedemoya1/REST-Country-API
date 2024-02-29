
import {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { changeTheme } from '../features/index'

export default function Header(props){

    let [theme, setTheme] = useState(false);
    const root = document.getElementById("root");

    useEffect(()=>{
        if(theme){
            root.style.backgroundColor = "var(--very-dark-blue)"
        }
        else{
            root.style.backgroundColor = "var(--very-light-gray)"
        }
    }, [theme]);

    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        setTheme(!theme)
        dispatch(changeTheme(theme))
    }

    return (

        <header 
            className={theme ? "dark--header" : "light--header"}
        >

            <h1 
                className={theme ? "dark--title" : "light--title"}
            >
                Where in the world?
            </h1>
            
            
            <div 
                onClick={toggleTheme} 
                className={theme ? "dark--btn" : "light--btn"}
            >
            {theme ? 
                <FontAwesomeIcon icon={faSun} />
                    :
                <FontAwesomeIcon icon={faMoon} />
            }
                {theme? "Light Mode" : "Dark Mode"}
            </div>
            
        </header>

    )
}