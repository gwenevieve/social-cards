import React from "react";
import defaultImage from "../../../src/img/flowers.jpeg";
import PropTypes from "prop-types";

const Slider = ({ content }) => {
  const slides = [
    {
      id: 0,
      alt: "field of orange flowers",
      src: require("../../../src/img/flowers.jpeg"),
    },
    {
      id: 1,
      alt: "white staircase on burgundy wall",
      src: require("../../../src/img/staircase.jpeg"),
    },
    {
      id: 2,
      alt: "dry field with sky in background",
      src: require("../../../src/img/field.jpeg"),
    },
  ];
  const [currentSlide, setCurrentSlide] = React.useState(slides[0]);

  const selectSlide = (currentSlideKey) => {
    setCurrentSlide(slides[currentSlideKey]);
  };

  return (
    <div className="posts">
      <div className="slider-container">
        <img alt={currentSlide.alt} src={currentSlide.src} />
        <div className="nav-container">
          <ul className="dot-nav">
            {slides.map((_, index) => {
              return (
                <li
                  key={`slide-${index}`}
                  onClick={() => selectSlide(index)}></li>
              );
            })}
          </ul>
        </div>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  content:
    "Praesent eu sem risus. In vitae suscipit sapien, in luctus ante. Phasellus lobortis rhoncus eros vitae tempus.",
  image: defaultImage,
  alt: "field of orange flowers",
};

Slider.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Slider;
