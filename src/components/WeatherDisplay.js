import React from 'react'

function WeatherDisplay(props) {
    const {data} = props;
    const iconURL = "http://openweathermap.org/img/wn/"+`${data.weather[0].icon}`+".png"
    return (
        <div className = "cardClass">
            <div className = "innerDiv">
               {data.name},{data.sys.country}
            </div>
            <br/>
            <div className = "localTimeClass">
                As of {new Date().toLocaleTimeString()}
            </div>
            <br/>
           
                   <div className = "temperaturDisplay">
                       {Math.floor(data.main.temp-273.15)}
                       <sup>o</sup>C
                   </div>
            
                   <div className = "weatherMain">
                       {data.weather[0].main}
                       <img src = {iconURL} className = "weatherIcon" alt = ""/>
                   </div>
           
            <div className = "weatherDetails">
                <div className = "section1">
                    <table>
                        <tr>
                            <td>
                                <h4 className = "parameterTable">Humidity</h4>
                            </td>
                            <td>
                               <span>
                                   {data.main.humidity} %
                               </span> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className = "parameterTable">Pressure</h4>
                            </td>
                            <td>
                               <span>
                                  {data.main.pressure} hPa
                               </span> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className = "parameterTable">Visibility</h4>
                            </td>
                            <td>
                               <span>
                                   {data.visibility / 1000} Km
                               </span> 
                            </td>
                        </tr>
                    </table>
                </div>
                <div className = "section2">
                    <table>
                        <tr>
                            <td>
                                <h4 className = "parameterTable">Wind</h4>
                            </td>
                            <td>
                               <span>
                                   {Math.floor((data.wind.speed*18)/5)} Km/hr
                               </span> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className = "parameterTable">Wind direction</h4>
                            </td>
                            <td>
                               <span>
                                  {data.wind.deg} deg
                               </span> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className = "parameterTable">Sunrise</h4>
                            </td>
                            <td>
                               <span>
                                   {new Date(data.sys.sunrise*1000).toLocaleTimeString()}
                               </span> 
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default WeatherDisplay
