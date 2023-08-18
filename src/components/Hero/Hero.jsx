import { motion } from "framer-motion";
import "./Hero.css";
import logo from "../../assets/images/logo.png";

const dots = [
	["dot d1", "dot d2", "dot d3", "dot d4"],
	["dot d5", "dot d6", "dot d7", "dot d8"],
];

const Hero = () => {
	return (
		<div className="hero_container colCenter">
			<motion.div
				className="logo"
				initial={{ y: -50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.3 }}
			>
				<img src={logo} alt="Logo" />
			</motion.div>
			<div className="desc colCenter">
				<motion.h1
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.4 }}
				>
					Saklash Theme
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.3, delay: 0.2 }}
				>
					Minimal, friendly theme for VS code, Sublime Text, Windows Terminal.
				</motion.p>
			</div>
			<div className="colorPalette_container colCenter">
				<motion.div
					className="palette_title"
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.3, delay: 0.3 }}
				>
					Color Palette
				</motion.div>
				<div className="color_dots colCenter">
					<div className="palette_top">
						{/* {dots[0].map((d, i) => {
							<span key={i} className={d}></span>
						})} */}
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
