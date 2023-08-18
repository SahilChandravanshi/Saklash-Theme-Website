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
			<div className="platform_heading">
				<h2>Available For</h2>
			</div>
			<div className="platforms rowCenter">
				{supportedPlatforms.map(({ name, image, link }, i) => (
					<a href={link} key={i} className="platform colCenter">
						<img src={image} alt="platformImage" className="platform_image" />
						<p className="platform_desc">{name} </p>
					</a>
				))}
			</div>
		</div>
	);
};

export default Platforms;
