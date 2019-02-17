import React, { Component } from 'react';
import './WeatherNow.css';
const APIKEY = '3b12f70220e4839817dc932124e437f3';
const conditions = [{}, {}, {}, {}];
const options = {
    //enableHighAccuracy: true,
    timeout: 10000,
};
class WeatherNow extends Component {
    state = {
        currently: null,
        error: null,
        timezone: null
    }
    getError = (err) => {
        var err_message = '';
        switch (err.code) {
            case err.PERMISSION_DENIED:
                err_message = "O no:( Looks like you did not allow your current location to be shared.";
                break;
            case err.POSITION_UNAVAILABLE:
                err_message = "O no:( Location information is unavailable. Try reloading the page.";
                break;
            case err.TIMEOUT:
                err_message = "O no:( The request timed out. Try reloading the page."
                break;
            case err.UNKNOWN_ERROR:
                err_message = "Oops we don't know what happened:( Try reloading the page."
                break;
        }
        console.log(err_message);
        this.setState({ error: err_message });
    }

    turnItOn = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeatherConditions, this.getError, options);
        }
        else {
            var err_message = "O no:( Geolocation is not supported for this Browser/OS version.";
            console.log(err_message);
            this.setState({ error: err_message });
        }
    }
    getWeatherConditions = (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var exclude_block = '?exclude=minutely,hourly,alerts,flags';
        var url = "https://api.forecast.io/forecast/" + APIKEY + "/" + latitude + ',' + longitude + exclude_block;
        fetch(url).then(res => res.json()).then((data) => {
            console.log(data);
            console.log("Currently :", data.currently);
            console.log("Currently :", data.currently.apparentTemperature);
            this.setState({ currently: data.currently, timezone: data.timezone });
            console.log(this.state.currently);
        });
    }

    componentDidMount() {
        this.turnItOn();
    }

    render() {
        return (
            <div className="wrapper">
                <div id="background-wrap">
                    <div class="x2"><div class="cloud"></div></div>
                    <div class="x3"><div class="cloud"></div></div>
                    <div class="x4"><div class="cloud"></div></div>
                    <div class="x5"><div class="cloud"></div></div>
                </div>
                <div className="main">
                    <div className="container">
                        <div className="title-container_title appTitle">WeatherNow</div>
                        {(this.state.error) ?
                            <div className="error">
                                {this.state.error}
                            </div> : null
                        }

                        <div className="title-container">

                            {
                                (this.state.currently) ?
                                    <div className="tempContainer">
                                        <table className="tempTable">
                                            <tr><td className="parameter">Timezone</td>:<td className="values">{this.state.timezone}</td></tr>
                                            <tr><td className="parameter">Temperature</td>:<td className="values">{this.state.currently.temperature}</td></tr>
                                            <tr><td className="parameter">Summary</td>:<td className="values">{this.state.currently.summary}</td></tr>
                                            <tr><td className="parameter">DewPoint</td>:<td className="values">{this.state.currently.dewPoint}</td></tr>
                                            <tr><td className="parameter">Humidity</td>:<td className="values">{this.state.currently.humidity}</td></tr>
                                            <tr><td className="parameter">Pressure</td>:<td className="values">{this.state.currently.pressure}</td></tr>
                                            <tr><td className="parameter">WindSpeed</td>:<td className="values">{this.state.currently.windSpeed}</td></tr>
                                            <tr><td className="parameter">WindGust</td>:<td className="values">{this.state.currently.windGust}</td></tr>
                                            <tr><td className="parameter">WindBearing</td>:<td className="values">{this.state.currently.windBearing}</td></tr>
                                            <tr><td className="parameter">CloudCover</td>:<td className="values">{this.state.currently.cloudCover}</td></tr>
                                            <tr><td className="parameter">UvIndex</td>:<td className="values">{this.state.currently.uvIndex}</td></tr>
                                            <tr><td className="parameter">Visibility</td>:<td className="values">{this.state.currently.visibility}</td></tr>
                                            <tr><td className="parameter">Ozone</td>:<td className="values">{this.state.currently.ozone}</td></tr>
                                        </table>
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherNow; 