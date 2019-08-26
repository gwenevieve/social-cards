import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Cards extends Component {

	render() {
		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1
		let year = date.getFullYear();

		let currentDate = day + '/' + month + '/' + year;
		return (
      <div className="cards">
				<img src={this.props.image} alt="card"></img>
				<div className="cards-content">
					<p className="cards-date">{currentDate}</p>
					<h1 className="cards-title">{this.props.title}</h1>
					<p>{this.props.content}</p>
				</div>
				<div className="cards-footer">
					<a href="#here">{this.props.cta_text}</a>
				</div>
      </div>
    );
	}
}

Cards.defaultProps = {
	title: 'Unknown',
	quote: "Pellentesque tincidunt mattis lorem, et tricies quis quam. Obus felis a ultricies.",
	content: "Pellentesque tincidunt mattis lorem, et tricies quis quam. Obus felis a ultricies. Pellentesque tincidunt mattis lorem, et tricies quis quam. Obus felis a ultricies...",
	image: "https://source.unsplash.com/user/erondu/400x200",
	cta_link: "#here",
	cta_text: "View More"
}

Cards.propTypes = {
	title: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	cta_link: PropTypes.string.isRequired,
	cta_text: PropTypes.string.isRequired,
}