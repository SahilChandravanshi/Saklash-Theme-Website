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
				<p>
					Minimal, friendly theme for VS code, Sublime Text, Windows Terminal.
				</p>
			</div>
			<div className="colorPalette_container colCenter">
      <div className="palette_title">
        Color Palette
      </div>
			<div className="color_dots colCenter">
				<div className="palette_top">
					<span class="dot d1"></span>
					<span class="dot d2"></span>
					<span class="dot d3"></span>
					<span class="dot d4"></span>
				</div>
				<div className="palette_bottom">
					<span class="dot d5"></span>
					<span class="dot d6"></span>
					<span class="dot d7"></span>
					<span class="dot d8"></span>
					<span class="dot d9"></span>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Hero;
