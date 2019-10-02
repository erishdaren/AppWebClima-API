import React from 'react';
import WeaterIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY} from '../../../constants/Weathers';

import PropTypes from 'prop-types';

const icons = {
    [CLOUD] :"cloud",
    [CLOUDY] : "cloudy",
    [SUN] : "day-sunny",
    [RAIN] :  "rain",
    [SNOW] : "snow",
    [WINDY]: "windy"
}   
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon) 
        return <WeaterIcons name={icon} size="2x" />;
     else 
        return <WeaterIcons name={"day-sunny"} size="2x" />;    
}
const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div>
            {getWeatherIcon(weatherState)} 
            <span>{`  ${temperature} °C`}</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState :  PropTypes.string.isRequired
};

export default WeatherTemperature;