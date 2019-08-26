
import React from 'react';
import './scss/app.scss';
import Avatars from "./components/avatar-post";
import Cards from "./components/default-post";
import Image from "./components/image-post";
import List from "./components/list-post";
import News from "./components/news-post";
require('dotenv').config()

function App() {
  return (
	<div className="container">
		<div className="container-row">
		<Avatars list={[{"name":"Vancouver", "link":"one"},{"name":"Toronto", "link":"two"}, {"name":"Montreal", "link":"three"}]} name={'Marie'} image={'https://source.unsplash.com/user/erondu/75x75'}/>
		<Cards/>
		<News title="Current Weather"/>
		</div>
		<div className="container-row">
		<Image author="Lorem Ipsum"/>
		<List title={'Grocery List'} list={[{"name":"Pineapple"},{"name":"Cheese"},{"name":"Strawberries"},{"name":"Kale"},{"name":"Eggs"}]}/>
		</div>
	</div>
	);
}

export default App;

