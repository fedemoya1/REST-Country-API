import { useEffect, useState } from "react";
import Filter from "../components/Filter"
import Main from "../components/Main"
import { useSelector } from "react-redux";

export default function HomePage(){

    const theme = useSelector((state)=>state.theme.value)
    const [country, setCountry] = useState([]);
    const [filterCountry, setFilterCountry] = useState("");
    const [filterRegion, setFilterRegion] = useState("");
    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            if (data.status !== 404){
                setCountry(()=>(data))   
            }
        })
        .catch(error => {
            console.log(error)
        })
    },[]);

    const handleFilterChange = (country, region) => {
        setFilterCountry(country);
        setFilterRegion(region);
    };

    const filteredCountries = country.filter(land => {
        const countryMatch =
            land.name.common.toLowerCase().includes(filterCountry.toLowerCase()) ||
            land.name.official.toLowerCase().includes(filterCountry.toLowerCase());
        const regionMatch = filterRegion === "" || land.region.toLowerCase() === filterRegion.toLowerCase();

        return countryMatch && regionMatch;
    });

    const Loading = (props)=>{
        return (
            <div 
                className={theme? "dark--territory" : "light--territory"}
            >
                {props.text}
            </div>
        )
      }

    let countries = filteredCountries.map((land) =>{

        return(
          <Main
              key={land.name.official} 
              img={land.flags.png}
              country={land.name.common}
              population={land.population.toLocaleString()}
              region={land.region}
              capital={land.capital}
          />
        )
      })

    return( 
        <>
            <Filter onChange={handleFilterChange}/>
            <main className="--main">
                {countries.length === 0 ? <Loading text="Country not Found"/> : countries}
            </main>
        </>
    )
}