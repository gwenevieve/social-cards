import React, { Component } from "react";
import Slider from "./carousel/slider";

export default class ImageSlider extends Component {
	render() {
		return (
			<div className="posts">
				<Slider/>
			</div>
		);
	}
}