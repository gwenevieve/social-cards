
import React from 'react';
import './scss/app.scss';
import Avatars from "./components/avatar-post";
import Cards from "./components/default-post";
import Image from "./components/image-post";
import List from "./components/list-post";
import News from "./components/news-post";
import ImageSlider from "./components/slider-post";

require('dotenv').config()

function App() {
  return (
	<div className="container">
		<div className="container-row">
		<Avatars list={[{"name":"Vancouver", "link":"one"},{"name":"Toronto", "link":"two"}, {"name":"Montreal", "link":"three"}]} name={'Marie'} image={'https://source.unsplash.com/user/erondu/75x75'}/>
		<Cards/>
		<ImageSlider/>
		<News title="Current Weather"/>
		<Image author="Lorem Ipsum"/>
		<List title={'Grocery List'}/>
		</div>
	</div>
	);
}

export default App;

