import React, { useEffect } from 'react'
import './css/style.css'
import { useState } from 'react'

const Tempapp = () => {
     const [city, setCity] = useState(null)
     const [search, setSearch] = useState("Mumbai")

     useEffect(() => {
        const fetchApi = async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=94df0da076dfcad75adfae1b0b6d1b0b`
            const response = await fetch(url) 
            const myJson = await response.json();
            setCity(myJson.main)
        }

        fetchApi();
     },[search]);
    return (
        <>
        <div className="box">
        <div className="inputData">
            <input type="search" value={search} placeholder="Enter Your name" className="input" defaultValue="" onChange={(e)=>{
                setSearch(e.target.value)
            }}/>
            
        </div>
        {!city ?
        <p style={{textAlign:"center"}}>No data found</p>:
        <div className="info">
                <h2 className="location">{search}</h2>
                <h1 className="temp">{city.temp} °C</h1>
                <h3 className="tempmin_max">
                <br/> 
                Min : {city.temp_min} °C | Max : {city.temp_max} °C
                </h3>
        </div>
        }
        </div>
        </>
    )
}

export default Tempapp
