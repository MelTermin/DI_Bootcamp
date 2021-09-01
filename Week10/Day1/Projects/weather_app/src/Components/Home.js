import React from 'react'
import { useState, useEffect } from 'react';
import Results from './Results';



function Home() {
  const [searchText, setSearchText]= useState ("")
  const [weather, setWeather]= useState([])
  const [locationKey, setLocationKey]=useState([])
 
  

  useEffect(() => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=wPaCoMzGtvltkHAJuS6QoZMuvTRPnS7Y`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
     setWeather(data.DailyForecasts)
      })
    
    }, [locationKey]);

   const getLocation= () => {
     const url= `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=wPaCoMzGtvltkHAJuS6QoZMuvTRPnS7Y&q=${searchText}&offset=0`
     fetch(url)
     .then(res=>res.json())
     .then(data =>{
       console.log(data)
      setLocationKey(data[0].Key)
      setSearchText("")

     
    }) 
   }
  
  return (
    <div className="search-container">
    <input className="search-bar" type="text" placeholder="Please type a city..." value={searchText} onChange= {(e)=>setSearchText(e.target.value)} />
    <button onClick= {()=>getLocation()}>Search</button>
    {/* <Title title= {title}></Title> */}
    <Results results= {weather}></Results>
    </div>
  )
}

export default Home
