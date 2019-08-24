import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default class Image extends Component {

  constructor(props){
    super(props)
    this.state = {
			active: false,
    }
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
	
	handleMouseEnter(){
		this.setState({
			active: !this.state.active,
		})
	}

	handleMouseLeave(){
		this.setState({
			active: !this.state.active,
		})
	}

	render() {
		return (
      <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={this.state.active ? "active image": "image"}>
				<img src={this.props.image} alt="card"></img>
				<div className="image-details">
					<p>76 <FontAwesomeIcon icon={faHeart} /></p>
					<p>956 <FontAwesomeIcon icon={faThumbsUp} /></p>
					<p>110 <FontAwesomeIcon icon={faComment} /></p>
				</div>
				<div className="image-content">
					<p className="image-quote">
						"{this.props.quote}"
					</p>
        	<p className="image-title">Author: {this.props.author}</p>
				</div>
      </div>
    );
	}
}


Image.defaultProps = {
	author: 'Unknown',
	image: "https://source.unsplash.com/user/erondu/400x200",
	quote: 'Praesent eu sem risus. In vitae suscipit sapien, in luctus ante.',
	cta_link: "#here",
	cta_text: "View More",
}

Image.propTypes = {
	author: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	cta_link: PropTypes.string.isRequired,
	cta_text: PropTypes.string.isRequired,
}