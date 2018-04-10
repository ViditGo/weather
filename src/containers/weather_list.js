import React from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import Chart from '../components/chart';

class WeatherList extends React.Component {
    constructor(props) {
    super(props);

    autobind(this);

    }

renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pres = cityData.list.map(weather => weather.main.pressure);
    const hum = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={name} >
            <td>{name}</td>
            <td>
            <Chart data={temp} color="red" units="K"/>
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
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature (K)</th>
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