import React, { useState } from "react";
import PropTypes from "prop-types";

function AvatarPost({ cities, name, quote, content, image, list }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => {
        setActive((prevState) => !prevState);
      }}
      className={active ? "active avatars" : "avatars"}>
      <div className="avatars-header">
        <img className="avatars-image" alt="avatar" src={image}></img>
        <h2 className="avatars-title">{name}</h2>
      </div>
      <div className="avatars-content">
        <p className="avatars-quote">{quote}</p>
        <p>{content}</p>
        {cities.map((city, cityIndex) => (
          <div key={`link-${cityIndex}`} className="avatars-links">
            <ul>
              <li>
                <a href={city.link}>{city.name}</a>
              </li>
            </ul>
          </div>
        ))}

        {list.map((listItem, index) => (
          <div key={`list-link-${index}`} className="avatars-links">
            <ul>
              <li>
                <a href={listItem.link}>{listItem.name}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

AvatarPost.defaultProps = {
  items: PropTypes.array,
  name: "Unknown",
  quote: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante.",
  content:
    "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante. Phasellus lobortis rhoncus eros vitae tempus.",
  list: [
    { name: "Link One", link: "One" },
    { name: "Link Two", link: "Two" },
  ],
  image: require("../../../src/img/profile.jpeg"),
};

AvatarPost.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default AvatarPost;
