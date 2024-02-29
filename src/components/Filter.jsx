import { useSelector } from "react-redux";

export default function Nav(props){

    const theme = useSelector((state) => state.theme.value);

    const handleChange = () => {
        const countryInput = document.getElementById("country").value;
        const regionInput = document.getElementById("continent").value;
        props.onChange(countryInput, regionInput);
    };
    
    return(

        <nav
            className={theme? "dark--nav" : "light--nav"}
        >
            
            <input 
                id="country"
                name="pais" 
                type="text"
                placeholder="Search for a country..."
                className={theme? "dark--inp" : "light--inp"}
                onChange={handleChange} 
            />

            <select
                id="continent"
                name="continent"
                className={theme? "dark--sel" : "light--sel"}
                onChange={handleChange} 
                placeholder="Filter by Region"
            >
                <option value="">All Regions</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </nav>
    )
}