import React from "react";
import "./scss/app.scss";
import Avatars from "./components/postTypes/Avatar";
import Cards from "./components/postTypes/Default";
import Image from "./components/postTypes/Image";
import List from "./components/postTypes/List";
import News from "./components/postTypes/News";
import ImageSlider from "./components/postTypes/Slider";
import TextChange from "./components/TextChange";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="container">
      <div className="container-row">
        <Avatars
          cities={[
            { name: "Vancouver", link: "one" },
            { name: "Toronto", link: "two" },
            { name: "Montreal", link: "three" },
          ]}
          name={"Marie"}
        />
        <Cards />
        <ImageSlider />
        <News title="Current Weather" />
        <Image author="Lorem Ipsum" />
        <List title={"Grocery List"} />
        <TextChange />
        <Search />
      </div>
    </div>
  );
}

export default App;
