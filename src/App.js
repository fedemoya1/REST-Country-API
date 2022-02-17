import React from "react"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Main from "./components/Main"
import Principal from "./components/Principal"
import Button from "./components/Button"

export default function App() {

  const root = document.getElementById("root")
  const [darkMode, setDarkMode] = React.useState(false)
  const [region, setRegion] = React.useState("all")
  const [country, setCountry] = React.useState([])
  const [mero, setMero] = React.useState([])
  const [active, setActive] = React.useState(false)
  //const [req, setReq] = React.useState("")

  function rooting(){
    if(darkMode){
      root.style.backgroundColor = "var(--very-dark-blue)"
    }
    else{
      root.style.backgroundColor = "var(--very-light-gray)"
    }
  }

  function activate(pais){
    setMero(pais)
    setActive(!active)
  }

  function desactivate(){
    setActive(!active)
  }

  function changeCountry(e){
    setRegion(() => {
      if (e.target.name === "pais"){
        if (e.target.value === ""){
          setRegion("all")
        }
        else{
          var regex = /[a-zA-Z]+/g;
          //e.target.value = e.target.value.match(regex).join("")
          if(e.target.value.match(regex) === null){
            setRegion(`all`)
          }
          else{
            setRegion(`name/${e.target.value.match(regex).join("")}`)
            console.log(e.target.value.match(regex).join(""))
          }
          /*aqui va un regex*/
          //setRegion(`name/${e.target.value}`)
          //setRegion(`name/${comparando(e.target.value)}`)
          //if(e.target.value.match(regex) !== null){
            //setRegion(`name/${e.target.value.}`)
            //e.target.value = e.target.value.match(regex).join("")
            //setRegion(`name/${e.target.value.match(regex).join("")}`)
            
          //}

        }
      }
      else{
        setRegion(`region/${e.target.value}`)
      }
      
    }
      )
  }
    
  
  //https://restcountries.com/v3.1/all
  //Weights: 300, 600, 800
  
  var countries = country.map((land) =>{

    return(
      <Main
          key={land.name.official} 
          darkMode={darkMode}
          img={land.flags.png}
          country={land.name.common}
          population={land.population.toLocaleString()}
          region={land.region}
          capital={land.capital}
          handleClick={() => activate(land)}
      />
    )
  })

  //.then(data => setCountry(data))

  React.useEffect(
  
    ()=>(fetch(`https://restcountries.com/v3.1/${region}`)
        .then(res => res.json())
        .then(data => {
          if (data.status !== 404){
            setCountry(data)
            
          }
          //setReq(`${region}`)
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        }
        ))
  ,[region])

  function toggleMode(){
    setDarkMode(prevMode => !prevMode)
  }

  rooting();
  
  return (
    
    <>

      <Header 
        darkMode={darkMode} 
        handleClick={toggleMode} 
        />

        {!active ? 
          <Filter 
            darkMode={darkMode}
            changeCountry={changeCountry}//ultima linea act
          /> : 
          <Button
            darkMode={darkMode}
            handleClick={desactivate}
          />}

          <main className="--main">
            {!active ?  countries : 
            <Principal
              darkMode={darkMode}
              img={mero.flags.png}
              country={mero.name.official}
              native={mero.name.nativeName}
              population={mero.population}
              region={mero.region}
              sub={mero.subregion}
              capital={mero.capital}
              domain={mero.tld[0]}
              currencies={mero.currencies}
              languages={mero.languages}
              border={mero.borders ? mero.borders : ["N/A"]}

            />
            }
          </main> 
          
    
        
    </>

  )
}

//<Main />