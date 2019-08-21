import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class List extends Component {
	
	render() {
    const list = this.props.list;
		const listItems = list.map((d, i) =>
		 <li key={i}>{d.name}</li>
		 );

    return (
      <div className="list">
				<h1 className="list-title">{this.props.title}</h1>
				<div className="list-content">
					<ol>
						{listItems}
					</ol>
						<div className="list-actions">
							<button className="button">Add Item</button>
						</div>
					</div>
      	</div>
    );
  }
}

List.defaultProps = {
	title: 'Unknown',
	list: [{"name":"Item One"},{"name":"Item Two"}]
}

List.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
}