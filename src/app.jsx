
import React from 'react';
import './scss/app.scss';
import Avatars from "./components/avatar-post";
import Cards from "./components/default-post";
import Image from "./components/image-post";
import List from "./components/list-post";
import News from "./components/news-post";
import ImageSlider from "./components/slider-post";
import Title from "./components/title";

function App() {
  return (
	<div className="container">
		<div className="container-row">
		<Avatars items={[{"name":"Vancouver", "link":"one"},{"name":"Toronto", "link":"two"}, {"name":"Montreal", "link":"three"}]} name={'Marie'}/>
		<Cards/>
		<ImageSlider/>
		<News title="Current Weather"/>
		<Image author="Lorem Ipsum"/>
		<List title={'Grocery List'}/>
		<Title/>
		</div>
	</div>
	);
}

export default App;

