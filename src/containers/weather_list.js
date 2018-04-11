import React from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
    constructor(props) {
    super(props);

    autobind(this);

    }

renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = _.map(cityData.list.map(weather => weather.main.temp) , temps => temps - 273);
    const pres = cityData.list.map(weather => weather.main.pressure);
    const hum = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name} >
            <td><GoogleMap lon={lon} lat={lat} /></td>
            <td>
            <Chart data={temp} color="red" units="C"/>
            </td>
            <td>
            <Chart data={pres} color="green" units="hPa" />
            </td>
            <td>
            <Chart data={hum} color="blue" units="%"/>
            </td>
        </tr>
    );
}


render() {
    // console.log(this.temp)
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature (C)</th>
                <th>Pressure (hPa)</th>
                 <th>Humidity (%)</th>
            </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
        </table>
    );
    }
}

// function mapStateToProps({ weather }){
//     return { weather }
// }

const mapStateToProps = ({weather}) => ({weather});

export default connect(mapStateToProps)(WeatherList);