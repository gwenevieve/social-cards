import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Image = (img) => {
  const [likes, setLikes] = useState(0);
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <div
      onMouseOver={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      className={mouseOn ? "active image" : "image"}>
      <img src={img.image} alt="card"></img>
      <div className="image-details">
        <button onClick={() => setLikes(likes + 1)}>
          {likes} <FontAwesomeIcon icon={faHeart} />
        </button>
        <button disabled>
          956 <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button disabled>
          110 <FontAwesomeIcon icon={faComment} />
        </button>
      </div>
      <div className="image-content">
        <p className="image-quote">"{img.quote}"</p>
        <p className="image-title">Author: {img.author}</p>
      </div>
    </div>
  );
};

Image.defaultProps = {
  author: "Unknown",
  image: require("../../../src/img/forest.jpeg"),
  quote: "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante.",
  cta_link: "#here",
  cta_text: "View More",
};

Image.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  cta_link: PropTypes.string.isRequired,
  cta_text: PropTypes.string.isRequired,
};

export default Image;
