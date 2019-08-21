import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Avatars extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			active: false,
    }
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
    this.setState({
			active: !this.state.active,
    })
	}

	render() {
		const list = this.props.list;
		const listItems = list.map((d, i) =>
		 <a key={i} href={d.link}>{d.name}</a>
		 );
		return (
			<div onClick={this.handleClick} className={this.state.active ? "active avatars": "avatars"}>
				<div className="avatars-header">
					<img className="avatars-image" alt="avatar" src={this.props.image}></img>
					<h2 className="avatars-title">{this.props.name}</h2>
				</div>
				<div className="avatars-content">
					<p className="avatars-quote">
					{this.props.quote}
					</p>
					<p>
					{this.props.content}
					</p>
					<div className="avatars-links">
					{listItems}
					</div>

      	</div>
			</div>
		);
	}
}

Avatars.defaultProps = {
	name: 'Unknown',
	quote: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante.",
	content: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante. Phasellus lobortis rhoncus eros vitae tempus.",
	list: [{"name":"Link One", "link":"One"},{"name":"Link Two", "link":"Two"}],
	image: "https://source.unsplash.com/user/erondu/75x75",
}

Avatars.propTypes = {
	name: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
	image: PropTypes.string.isRequired,
}


