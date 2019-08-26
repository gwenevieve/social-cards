import React, { Component } from "react";
import { startCase } from 'lodash';

export default class Weather extends Component {

	constructor(props) {
		super(props);
			this.state = {
					date: new Date(),
					weather: undefined,
					temps: undefined,
					name: undefined,
					desc: undefined,
					error: null
				};
			}

componentDidMount() {
	let key = process.env.REACT_APP_WEATHERAPI;
	let city = 'toronto';
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
	fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Something went wrong ...');
			}
		})
		.then(data => this.setState({ 
			weather: data.weather[0].icon,
			temps: Math.trunc(data.main.temp),
			name: data.name,
			desc: data.weather[0].description
		 }
			))
		.catch(error => this.setState({ error }));
}

	render() {
		return (
			<div>
				<div className="weather-location">
					<p>{this.state.name}</p>
					<p>{this.state.date.getHours() + `:00`}</p>
					<p>{startCase(this.state.desc)}</p>
				</div>
				<div className="weather-details">
					<span className="weather-temperature">{this.state.temps}</span><span className="weather-unit">{`°C`}</span>
					<img src={ `http://openweathermap.org/img/wn/`+ this.state.weather + `@2x.png`} alt="weather symbol"/>
				</div>
			</div>
		)
	}
}
