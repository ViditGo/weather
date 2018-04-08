import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import autobind from 'react-autobind';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term : ''};

        autobind(this);
    }
    onInputChange(e) {
        this.setState ({term : e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''});
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
            <input 
            placeholder='Get a 5 day forecast'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>
            Submit
            </button>
            </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({ fetchWeather } , dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);