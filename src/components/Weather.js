import React, {useState} from 'react'
import './weather.css'
import WeatherDisplay from './WeatherDisplay'

function Weather() {

    const APIKEY = "4f24a2d606e606f68b6c1cf9d5315ebf"

    const[form, setForm] = useState({
        city: "",
        country: ""
    })

    const[weather, setWeather] = useState([]);

    async function weatherData(e){
        if(form.city === ""){
            alert("please enter city!");
        }
        else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            )
            .then((res) => res.json())
            .then((data) => data);

            setWeather({data : data});
        }
    }

    const handlerChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setForm({...form, city:value})
        }
        if(name === "country"){
            setForm({...form, country:value})
        }
    }
    console.log(form.city, form.country)
    return (
        <div>
            <div className = "styleTop">
            <div className = "topLogo">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" color = "white"  class="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"/>
</svg>
</div>
                <div className = "textStyle">weatherApp</div>
            </div>
            <div className = "weatherCard">
                
                <form className = "box">
                    <input type = "text" className = "searchBox" name = "city"  placeholder = "Enter city" onChange = {(e) => handlerChange(e)}></input>

                    <input type = "text" className = "searchBox" 
                    
                    name = "country" placeholder = "Enter country" onChange = {(e) => handlerChange(e)}></input>

                    <div className = "submit" onClick = {(e) => weatherData(e)}>Search</div>
                    
                </form>
                {
                    weather.data != undefined?(

                    <div>
                       <WeatherDisplay data = {weather.data}/>
                    </div>
                    ):null
                }
            </div>
        </div>
    );
}

export default Weather
