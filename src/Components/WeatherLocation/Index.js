import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
//import PropTypes from 'prop-types';

export default class WaterLocation extends Component {


    render() {
        
        return (
            <div className="class-name">
              
              <Location city={"Veracruz, Veracruz"}/>
              <WeatherData />
            </div>
        );
        
    }
}