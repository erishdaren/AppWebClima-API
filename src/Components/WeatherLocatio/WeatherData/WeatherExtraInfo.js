import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div>
            <span>
                {`Humendad : ${humidity}%  - `}
            </span>
            <span>
                { ` Viento : ${wind}`}
            </span>
        </div>
    );
};

WeatherExtraInfo.propType = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired
}

export default WeatherExtraInfo;