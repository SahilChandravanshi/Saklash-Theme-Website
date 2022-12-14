import React, { useState } from "react";
import colorTheme from "../../colorThemes.json"
import "./Themes.css";

const Themes = () => {

	const [selected, setSelected] = useState(colorTheme[0].image)

	return (
		<div className="theme_container rowCenter">
			<div className="theme_selector">
				{colorTheme.map(constant => {
					return (
						<span className="square" style={{"background-color": constant.color}} onClick={() => setSelected(constant.image)}></span>
					)
				})}
			</div>
			<div className="theme_image">
						<img src={selected} alt="" />
			</div>
		</div>
	);
};

export default Themes;
