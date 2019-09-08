import React, { Component } from "react";
import PropTypes from 'prop-types';
import Weather from './weather/forecast';

export default class News extends Component {
	
	render() {
		return (
			<div className="news">
				<div className="news-title">
					<h1>{this.props.title}</h1>
				</div>
				<div className="news-content">
				<div className="weather">
					<Weather/>
				</div>
					<p>
						unc ut nisi vulputate, nec feugiat lacus pretium. Suspendisse id tempor augue. Nunc 
						eget nisi condimentum, aliquam dui vitae, commodo tellus. Curabitur a cursus dolor. Quisque ligula dui
					</p>
				</div>
			</div>
		);
	}
}

News.defaultProps = {
	title: 'Unknown',
}

News.propTypes = {
	title: PropTypes.string.isRequired,
}