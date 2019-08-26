import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			value: '',
			list: [
				{ id: 1, name: 'Peaches' },
				{ id: 2, name: 'Watermelon' },
				{ id: 3, name: 'Chicken' }
			]
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleAdd = this.handleAdd.bind(this);
}

	handleEditState() {
		this.setState({
			edit: !this.state.edit,
		})
	}

	handleDelete(item) {
		const list = this.state.list.filter(i => i.id !== item.id);
		this.setState({ list });
	};

  handleChange(event) {
		this.setState({
			value: event.target.value
		});
  }

  handleAdd(event) {
		event.preventDefault();
		this.setState(previousState => ({
				list: [...previousState.list, {
					'id': Object.keys(this.state.list).length + 1,
					'name': this.state.value,
					}
				]
		}));
		this.setState({
      value: '',
    });
  }

	render() {
		let listItems;
			
		 if (this.state.edit === true) {
			listItems = this.state.list.map((item, id) =>
			<li key={id}>{item.name}
				<FontAwesomeIcon className="list-delete" onClick={this.handleDelete.bind(this, item)} icon={faMinus} />
			</li>
			);
			} else {
				listItems = this.state.list.map((item, id) =>
				<li key={id}>{item.name}
				</li>
				);
			}

			if (this.state.edit === true) {
			return (
				<div className="list">
					<h1 className="list-title">{this.props.title}</h1>
					<div className="list-content">
						<ol style={{textAlign: Object.keys(this.state.list).length !== 0 ? '' : 'center'}}>       
						{Object.keys(this.state.list).length !== 0 ? listItems : 'No items found!'}
						</ol>
							<div className="list-actions">
								<input value={this.state.value} onChange={this.handleChange} type="text" placeholder="Item name"></input>
								<div className="controls">
									<button onClick={this.handleAdd} className="button">Add</button>
									<button className="button" onClick={this.handleEditState.bind(this)}>Close</button>
								</div>
							</div>
						</div>
					</div>
			);
		} else {
			return (
				<div className="list">
					<h1 className="list-title">{this.props.title}</h1>
					<div className="list-content">
						<ol style={{textAlign: Object.keys(this.state.list).length !== 0 ? '' : 'center'}}>       
							{Object.keys(this.state.list).length !== 0 ? listItems : 'Please add an item'}
						</ol>
							<div className="list-actions row">
								<button className="button" onClick={this.handleEditState.bind(this)}>Edit</button>
							</div>
						</div>
					</div>
			);
		}
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