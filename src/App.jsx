import React from "react";
import Hero from "./components/Hero/Hero";
import Themes from "./components/Themes/Themes"
import Bottom from "./components/Bottom/Bottom"
import "./App.css";

const App = () => {
	return (
		<div>
			<Hero />
      <Themes />
      <Bottom/>
		</div>
	);
};

export default App;
