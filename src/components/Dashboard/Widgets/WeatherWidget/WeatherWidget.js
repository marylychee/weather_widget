import React from 'react';
import axios from 'axios';
import Widget from '../Widget.js';
import Paper from 'material-ui/Paper';
import Skycons from 'react-skycons';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import '../Widget.css';

const style = {
  weatherContainer : {
    width: 500,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    display: 'inline-block',
    rounded: true,
  },
  root: {
    flexGrow: 1,
  }
};


class WeatherWidget extends Widget {

  constructor(props) {
    super(props);

    this.state = { weather: null }
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    const { data: { lat, lng } } = this.props.widget;

    if (!lat || !lng) return;

    axios.get(`http://ec2-54-161-131-187.compute-1.amazonaws.com/weather?lat=${lat}&lng=${lng}`)
      .then(response => {
          this.setState({ weather : response.data })
      })
      .catch(error => {
          console.log(error);
      });
  }

  currentTemperature(faren) {
    return this.weather && Math.round((faren - 32)*5/9).toString().concat("°C");
  }

  percentage(num) {
    return (num * 100).toString().concat('%')
  }

  get weather () {
    return this.state.weather;
  }

  renderFront () {
    const geoData = this.props.widget;
    console.log('this is the weather', this.weather);

    return (
      <div className="weatherWidget">
        <Paper style={style.weatherContainer} zDepth={2} >
          <Container fluid={true}>
            <Row className="todayForecast">
                <Col md="4">
                  <h3>{geoData.data.location}</h3>
                  <p className="forecastTextSide">
                    Precipitation: {this.weather && this.percentage(this.weather.currently.precipIntensity)}
                  </p>
                  <p className="forecastTextSide">
                    Humidity: {this.weather && this.percentage(this.weather.currently.humidity)}
                  </p>
                  <p className="forecastTextSide">
                    Wind: {this.weather && this.weather.currently.windSpeed}km/hr
                  </p>
                  <p></p>
                </Col>
                <Col md="4">
                  <div className="weatherIcon">
                    <Skycons color='rgb(255, 220, 69)' icon={this.weather && this.weather.currently.icon.toUpperCase().replace(/-/g, '_')} autoplay={true}/>
                    <p className="forecastText">{this.weather && this.weather.currently.icon.replace(/-/g, ' ')}</p>
                  </div>
                </Col>
                <Col md="4">
                  <h1 className="temperatureFontStyle">
                  {this.weather && this.currentTemperature(this.weather.currently.apparentTemperature)}
                </h1>
                </Col>
            </Row>
          </Container>
          <Container fluid={true}>
            <Row className="weekForecast">
              {this.renderWeeklyForecast}
            </Row>
          </Container>
        </Paper>
      </div>
    )
  }

  get renderWeeklyForecast() {
    return this.weather && this.weather.daily.data.slice(0,5).map((item, index) => (
        <Col md="2" key={index}>
          <Skycons color='rgb(121, 36, 166)' icon={this.weather && item.icon.toUpperCase().replace(/-/g, '_')} autoplay={true}/>
          <p className="miniForecastTxt">{this.currentTemperature(item.apparentTemperatureMax).slice(0,-1)} <span className="nightTxt">{this.currentTemperature(item.apparentTemperatureMin).slice(0,-1)}</span></p>
        </Col>
    ));
  }

  renderBack () {

  }

}


export default WeatherWidget;
