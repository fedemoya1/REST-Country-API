import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

export default function Main({ img, country, population, region, capital}){

    const theme = useSelector((state) => state.theme.value);

    return (
        <Link to={`/country?name=${country}`}>
            <div 
                className={theme? "dark--block" : "light--block"}
            >
                <img 
                    src={img} 
                    className="--flag" 
                    alt="Flag"
                />
                <h2 className="--land">{country}</h2>
                <ul className="--list">
                    <li><span>Population:</span> {population}
                    </li>
                    <li><span>Region:</span> {region}
                    </li>
                    <li><span>Capital:</span> {capital}
                    </li>
                </ul>
            </div>
        </Link>
    )
}