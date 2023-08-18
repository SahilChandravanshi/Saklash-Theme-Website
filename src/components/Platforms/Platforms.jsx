import { motion } from "framer-motion";
import "./Platforms.css";

const supportedPlatforms = [
	{
		name: "VS Code",
		image: "assets/images/platform logs/vsode.png",
		link: "https://marketplace.visualstudio.com/items?itemName=SahilChandravanshi.saklash-theme",
	},
	{
		name: "Sublime Text",
		image: "assets/images/platform logs/sublime.png",
		link: "https://github.com/SahilChandravanshi/Saklash-Theme-sublime",
	},
	{
		name: "Win Terminal",
		image: "assets/images/platform logs/WT.png",
		link: "https://github.com/SahilChandravanshi/Saklash-Theme-WT",
	},
];

const Platforms = () => {
	return (
		<div className="platforms_container colCenter">
			<motion.div
				className="platform_heading"
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.3}}
			>
				<h2>Available For</h2>
			</motion.div>
			<div className="platforms rowCenter">
				{supportedPlatforms.map(({ name, image, link }, i) => (
					<motion.a
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 0.3, delay: i * 0.1 }}
						href={link}
						key={i}
						className="platform colCenter"
					>
						<img src={image} alt="platformImage" className="platform_image" />
						<p className="platform_desc">{name} </p>
					</motion.a>
				))}
			</div>
		</div>
	);
};

export default Platforms;
