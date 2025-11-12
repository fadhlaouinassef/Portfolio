import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useGSAP(() => {
		if (!isLoading) {
			ScrollSmoother.create({
				smooth: 3,
				effects: true,
			});
		}
	}, [isLoading]);

	const handleLoadComplete = () => {
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && <Loader onComplete={handleLoadComplete} />}
			<CustomCursor />
			<main>
				<Navbar />
				<div id="smooth-wrapper">
					<div id="smooth-content">
						<Hero />
						<Message />
						<Skills />
						<Experience />
						<div>
							<Projects />
							<Education />
						</div>
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
