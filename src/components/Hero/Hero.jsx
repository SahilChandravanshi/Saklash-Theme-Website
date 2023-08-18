import "./Hero.css";
import logo from "../../assets/images/logo.png";

const Hero = () => {
	return (
		<div className="hero_container colCenter">
			<div className="logo">
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
					<span className="dot d1"></span>
					<span className="dot d2"></span>
					<span className="dot d3"></span>
					<span className="dot d4"></span>
				</div>
				<div className="palette_bottom">
					<span className="dot d5"></span>
					<span className="dot d6"></span>
					<span className="dot d7"></span>
					<span className="dot d8"></span>
					<span className="dot d9"></span>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Hero;
