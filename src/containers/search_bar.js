import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import autobind from 'react-autobind';
import Dropdown from 'react-dropdown'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city : '',
            options : [
                {value: "US", label: "United States"},
                {value: "GB", label: "United Kingdom"},
                {value: "IN", label: "India"},
                {value: "DE", label: "Germany"},
                {value: "FR", label: "France"}
              ],
              country: ''
    };

        autobind(this);
    }
    onInputChange(e) {
        this.setState ({city : e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.city, this.state.country);
        this.setState({city : '', country : ''});
    }
    onSelect(country) {
        this.setState({country})
    }

    
    
    render() {
        // console.log(temps)
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
            <input 
            placeholder='Get a 5 day forecast'
            className='form-control'
            value={this.state.city}
            onChange={this.onInputChange}
            />
            <span>
            <Dropdown options={this.state.options.map(option => option.label)} 
            onChange={this.onSelect} 
            value={this.state.country} 
            placeholder="Select an option" />
            </span>
            <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>
            Submit
            </button>
            </span>
            
            </form>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators ({ fetchWeather } , dispatch)
// }

const mapDispatchToProps = (dispatch) => bindActionCreators( {fetchWeather}, dispatch )

export default connect(null, mapDispatchToProps)(SearchBar);