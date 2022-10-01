import React from "react";
import "./Hero.css";
import logo from "../../images/logo.png";

const Hero = () => {
	return (
		<div className="hero_container colCenter">
			<div class="logo">
				<img src={logo} alt="Logo" />
			</div>
			<div className="desc colCenter">
				<h1>Saklash Theme</h1>
				<p>The theme you will ever need!</p>
				<p>
					Minimal, friendly theme for VS code, Sublime Text, Windows Terminal.
				</p>
			</div>
		</div>
	);
};

export default Hero;
