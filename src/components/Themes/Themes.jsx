import { useState, useRef } from "react";
import colorTheme from "../../colorThemes.json";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Themes.css";

const Themes = () => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	});

	const imageValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const selectorValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

	// State for to change theme image
	const [selected, setSelected] = useState(colorTheme[0].image);

	return (
		<div className="theme_container rowCenter" ref={containerRef}>
			<motion.div className="theme_selector" style={{translateX: selectorValue}}>
				{colorTheme.map((constant, i) => {
					return (
						<span
							key={i}
							className="square"
							style={{ "background-color": constant.color }}
							onClick={() => setSelected(constant.image)}
						></span>
					);
				})}
			</motion.div>
			<motion.div className="theme_image" style={{translateX:imageValue}}>
				<img src={selected} alt="ThemePreviewImg" />
			</motion.div>
		</div>
	);
};

export default Themes;
