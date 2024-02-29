import {nanoid} from "nanoid";
import {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import {useURLID} from "./useURLID";
import {Link} from "react-router-dom"

export default function ShortCountry(){
    
    const {name} = useURLID();
    const [singleCountry, setSingleCountry] = useState({});
    const theme = useSelector((state) => state.theme.value);

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
            const data = await res.json();
            setSingleCountry(data[0]);
          } catch (error) {
            console.log(error);
          } 
        }
        fetchData();
      }, [name]);

      const Loading = (props)=>{
        return (
            <div 
                className={theme? "dark--territory" : "light--territory"}
            >
                {props.text}
            </div>
        )
      }

    const curren = [];
    const lang = [];

    for (let key in singleCountry.currencies) {
        curren.push(singleCountry.currencies[key])
    }

    for (let key in singleCountry.languages) {
        lang.push(singleCountry.languages[key])
    }

    let limites =singleCountry.borders && Array.isArray(singleCountry.borders)
    ? singleCountry.borders.map( con => (
        <Link to={`/short?name=${con}`}>
            <li 
                key={nanoid()}
                className={theme ? "dark-li" : "light-li"}
            >
                    {con}
            </li>
        </Link>
        )) : "N/A";

      const CountryInfo = ()=>{
        return (
            <div 
                className={theme? "dark--territory" : "light--territory"}
            >
                <img 
                    src={singleCountry.flags.png} 
                    className={theme? "--flag --solo-dark" : "--flag --solo-light"} 
                    alt="Flag"
                />
                <div className = "--final-block">
                    <h2 className="--land">{singleCountry.name.common}</h2>
                    <div className="--dividis">
                        <ul className="--list">
                            <li><span>Native Name:</span> {singleCountry.name.official}
                            </li>
                            <li><span>Population:</span> {singleCountry.population.toLocaleString()}
                            </li>
                            <li><span>Region:</span> {singleCountry.region}
                            </li>
                            <li><span>Sub Region:</span> {singleCountry.subregion}
                            </li>
                            <li><span>Capital:</span> {singleCountry.capital[0]}
                            </li>
                        </ul>

                        <ul className="--list">
                            <li><span>Top Level Domain:</span> {singleCountry.tld[0]}
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

    return(
        <>
        {
            JSON.stringify(singleCountry) === '{}' ? <Loading text="Loading..."/> : 
            JSON.stringify(singleCountry) === undefined ?  <Loading text="Country not found"/> :
            <CountryInfo />
        }
        </>
    )
}