import React, { Component } from "react";
import defaultImage from '../../../src/img/flowers.jpeg';
import PropTypes from 'prop-types';

export default class Slider extends Component {
	constructor(props){
    super(props)
    this.state = {
			currentSlide: defaultImage,
			currentAlt: this.props.alt,
			slides: [
				{ id: 1, alt: 'field of orange flowers', src: require("../../../src/img/flowers.jpeg") },
				{ id: 2, alt: 'white staircase on burgundy wall', src: require("../../../src/img/staircase.jpeg") },
				{ id: 3, alt: 'dry field with sky in background', src: require("../../../src/img/field.jpeg") }
			]
    }
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
    this.setState({
			currentSlide: event.target.getAttribute("data-image"),
			currentAlt: event.target.getAttribute("data-alt")
		})
	}

	render() {
		let listItems;

		listItems = this.state.slides.map((slide, id) =>
		<li onClick={this.handleClick} key={id} data-image={slide.src} data-alt={slide.alt}>
		</li>
		);

		return (
			<div className="slider-container">
				<img src={this.state.currentSlide ? this.state.currentSlide : this.props.defaultImage} alt={this.state.currentAlt ? this.state.currentAlt : this.props.defaultAlt}/>
				<div className="nav-container">
					<ul className="dot-nav">
						{listItems}
					</ul>
				</div>
				<p className="content">
					{this.props.content}
				</p>
			</div>
		)
	}
}

Slider.defaultProps = {
	content: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante. Phasellus lobortis rhoncus eros vitae tempus.",
	image: defaultImage,
	alt: "field of orange flowers"
}

Slider.propTypes = {
	content: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}
