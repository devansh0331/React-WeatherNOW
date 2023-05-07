import React , {useState , useEffect} from 'react'
import "./Form.css";

// import Card from "../card/Card"

function Form() {

    const [city_name , setCity] = useState('')
    const API_Key = "e3f851c64bbd4266fc6cc6f44c8ff111"
    // const URL = `https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=${API_key}`

    const [search , setSearch] = useState('')
    const [data , setData] = useState([])
    const [main , setMain] = useState([])
    const [weather , setWeather] = useState([])
    const [sys , setSys] = useState([])
    const [searchBegins , setSearchBegins] = useState(false)
    
    useEffect(() => {
        getWeatherData();
   
    },[city_name])



    const getWeatherData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_Key}`)
        const parsedData = await response.json()
        // return parsedData
        if(parsedData.cod === 200){

            setData(parsedData)
            setMain(parsedData.main)
            setSys(parsedData.sys)
            setWeather(parsedData.weather[0])
            setSearchBegins(true)
        }

        else{
            setData('')
        }
        
        // console.log(parsedData.name)
        // console.log(data.name)
    }
  return (
    <div className="Form" >
       <form onSubmit={(e) => { 
        e.preventDefault(); 
        let new_city = search.trim().replace(/\s+/g, ' ');
            setCity(new_city)
            console.log(new_city)
          
        setSearch('');}} className="input" >
        <input type="String" name="" onChange={e => setSearch(e.target.value)} value={search} placeholder="Enter a city"/>
        <button onClick={() => {setSearchBegins(true)}} type="Submit">Search</button>
        
    </form>
         {/* <div style={{color : "white" , textShadow : "2px 2px 10px gray"}}>
            <h1>Welocome to know the current Weather Forcast</h1>
         </div>
     */}

    <section className="main">
        <div className="blur">
        
       
        {data && <> <div className="city">
            {data.name}, {sys.country} 
        </div>

        <div className="temp" style={{color : "yellow", opacity : "0.7"}}>
            {Math.round((main.temp - 273)*10)/10} &#8451;
            {/* {data.main.temp} */}
            
        </div>

        <div className="desc" style={{fontStyle: "italic", color : "yellow"}}>
         
            {/* {data.weather[0].main}, {data.weather[0].description} */}
            {weather.main}, {weather.description}
            
        </div>
        <div className="date" style={{fontSize: "1rem", marginTop : "1rem"}} >
            {/* Monday , 21 March 2023 */}
            Today...
            
            
        </div></>}
        {!data && <> {searchBegins ? <div>
            <strong>No City Available :</strong>
            <p> Search with a valid city name</p>
        </div> : <div>
            <strong><h1>Welcome USER !!</h1></strong>
            <p>Start searching your city name and know the current Weather Forcast</p> 
        </div> }</>}

            
            
           
        </div>
        
    </section>

    </div>
  )
}

export default Form
