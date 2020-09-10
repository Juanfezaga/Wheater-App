import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

class App extends React.Component {
    state={ query: 'London' }

    componentDidMount(){
        this.props.fetchWeather(this.state.query)
    }

    render(){
        console.log(this.props.weather)
        return (
            <div>
                
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, { fetchWeather } )(App)