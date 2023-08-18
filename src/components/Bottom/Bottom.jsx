import { motion } from "framer-motion";
import "./Bottom.css";

const Bottom = () => {
	return (
		<motion.div
			className="bottom_container colCenter"
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: false, amount: 0.5 }}
			transition={{ duration: 0.1 }}
		>
			<a
				href="https://sahilchandravanshi.com/"
				target="_blank"
				rel="noreferrer"
				className="bottom_button"
			>
				Made by Sahil Chandravanshi
			</a>
		</motion.div>
	);
};

export default Bottom;
