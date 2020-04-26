import React, { useState } from "react";
import PropTypes from "prop-types";

const Headline = ({ title }) => {
  return (
    <h1 className="title-header">
      {title}
    </h1>
  );
};

const Input = ({ value, onChangeInput }) =>
  <label>
		Set title:
    <input type="text" value={value} onChange={onChangeInput} />
  </label>;

function Title() {
  const [blogTitle, setblogTitle] = useState("Welcome to my blog!");

  const handleChange = event => {
    setblogTitle(event.target.value);
  };

  return (
    <div className="title">
      <Headline title={blogTitle} />
      <div className="title-content">
				<div className="title-actions">
        	<Input value={blogTitle} onChangeInput={handleChange}/>
				</div>
      </div>
    </div>
  );
}

Title.propTypes = {
  blogTitle: PropTypes.string.isRequired
};

export default Title;
