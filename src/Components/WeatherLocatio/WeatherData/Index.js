import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeaterExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY} from '../../../constants/Weathers';
const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature 
                temperature = {20} 
                weatherState={WINDY}/>
            <WeaterExtraInfo humidity={80} wind = {"10 m/s"}/>
        </div>
    );
};

export default WeatherData;

