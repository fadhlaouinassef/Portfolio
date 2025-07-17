import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Benefit from "./sections/Benefit";
import Flavor from "./sections/Flavor";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Nutrition from "./sections/Nutrition";
import Testimonial from "./sections/Testimonial";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 3,
			effects: true,
		});
	});
	return (
		<main>
			<Navbar />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<Hero />
					<Message />
					<Flavor />
					<Nutrition />
					<div>
						<Benefit />
						<Testimonial />
					</div>
					<Footer />
				</div>
			</div>
		</main>
	);
};

export default App;
