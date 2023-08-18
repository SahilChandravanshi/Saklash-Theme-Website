import Hero from "./components/Hero/Hero";
import Themes from "./components/Themes/Themes";
import Platforms from "./components/Platforms/Platforms";
import Bottom from "./components/Bottom/Bottom";
import "./App.css";

const App = () => {
	return (
		<div>
			<Hero />
			<Themes />
			<Platforms />
			<Bottom />
		</div>
	);
};

export default App;
