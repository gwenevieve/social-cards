import React, { useState } from "react";
import PropTypes from 'prop-types';

function Avatars({items, name, quote, content, image, list}) {
	const [active, setActive] = useState(0);

	const handleClick = () => {
   setActive("active")
	}

		return (
			<div onClick={handleClick} className={active ? "active avatars": "avatars"}>
				<div className="avatars-header">
					<img className="avatars-image" alt="avatar" src={image}></img>
					<h2 className="avatars-title">{name}</h2>
				</div>
				<div className="avatars-content">
					<p className="avatars-quote">
					{quote}
					</p>
					<p>
					{content}
					</p>
					{items.map((item, index) => (
					<div className="avatars-links">
						<ul>
							<li key={index}>
							<a href={item.link}>{item.name}</a>
							</li>
						</ul>
					</div>
					))}

						{list.map((listItem, index) => (
					<div className="avatars-links">
						<ul>
							<li key={index}>
							<a href={listItem.link}>{listItem.name}</a>
							</li>
						</ul>
					</div>
					))}
      	</div>
			</div>
						
		);
	}

Avatars.defaultProps = {
	items: PropTypes.array,
	name: 'Unknown',
	quote: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante.",
	content: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante. Phasellus lobortis rhoncus eros vitae tempus.",
	list: [{"name":"Link One", "link":"One"},{"name":"Link Two", "link":"Two"}],
	image: require("../../src/img/profile.jpeg"),
}

Avatars.propTypes = {
	name: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
	image: PropTypes.string.isRequired,
}

export default Avatars;
