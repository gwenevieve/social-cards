import React from "react";
import PropTypes from "prop-types";

const DefaultPost = ({ image, title, content, cta }) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = day + "/" + month + "/" + year;
  return (
    <div className="cards">
      <img src={image} alt="card"></img>
      <div className="cards-content">
        <p className="cards-date">{currentDate}</p>
        <h1 className="cards-title">{title}</h1>
        <p>{content}</p>
      </div>
      <div className="cards-footer">
        <a href="#here">{cta}</a>
      </div>
    </div>
  );
};

DefaultPost.defaultProps = {
  title: "Unknown",
  quote:
    "Pellentesque tincidunt mattis lorem, et tricies quis quam. Obus felis a ultricies.",
  content:
    "Pellentesque tincidunt mattis lorem, et tricies quis quam. Obus felis a ultricies. Pellentesque tincidunt mattis lorem, et tricies quis quam. Obus felis a ultricies...",
  image: require("../../../src/img/mountains.jpeg"),
  cta_link: "#here",
  cta_text: "View More",
};

DefaultPost.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cta_link: PropTypes.string.isRequired,
  cta_text: PropTypes.string.isRequired,
};

export default DefaultPost;
