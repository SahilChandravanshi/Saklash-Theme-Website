import React from "react";
import "./Themes.css";

const Themes = () => {
	return (
		<div className="theme_container rowCenter">
			<div className="theme_selector">
				<span class="square s1"></span>
				<span class="square s2"></span>
				<span class="square s3"></span>
				<span class="square s4"></span>
			</div>
			<div className="theme_image">
				<img src={require("../../images/SOOTHINGt.png")} alt="" />
			</div>
		</div>
	);
};

export default Themes;
