import React from "react";
import "./Platforms.css";

const Platforms = () => {
	return (
		<div className="platforms_container colCenter">
			<div className="platform_heading">
				<h2>Available For</h2>
			</div>
			<div className="platforms rowCenter">
				<a
					href="https://marketplace.visualstudio.com/items?itemName=SahilChandravanshi.saklash-theme"
					className="platform colCenter"
				>
					<img src={require("../../images/platform logs/vsode.png")} alt="" className="platform_image"/>
					<p className="platform_desc">VS Code</p>
				</a>
				<a
					href="https://github.com/SahilChandravanshi/Saklash-Theme-sublime"
					className="platform colCenter"
				>
					<img src={require("../../images/platform logs/sublime.png")} alt="" className="platform_image"/>
					<p className="platform_desc">Sublime Text</p>
				</a>
				<a
					href="https://github.com/SahilChandravanshi/Saklash-Theme-WT"
					className="platform colCenter"
				>
					<img src={require("../../images/platform logs/WT.png")} alt="" className="platform_image"/>
					<p className="platform_desc">Win Terminal</p>
				</a>
			</div>
		</div>
	);
};

export default Platforms;
