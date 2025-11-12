/** biome-ignore-all lint/suspicious/noArrayIndexKey: ANIMATION */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { experienceList } from "../constants";

const Experience = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [experiences, setExperiences] = useState(experienceList);
	
	useEffect(() => {
		if (isMobile) {
			setExperiences(experienceList.slice(0, 2));
		} else {
			setExperiences(experienceList);
		}
	}, [isMobile]);

	useGSAP(() => {
		const titleSplit = SplitText.create(".experience-title", {
			type: "chars",
		});
		const paragraphSplit = SplitText.create(".experience-section p", {
			type: "words, lines",
			linesClass: "paragraph-line",
		});
		const contentTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".experience-section",
				start: "top center",
			},
		});
		contentTl
			.from(titleSplit.chars, {
				yPercent: 100,
				stagger: 0.02,
				ease: "power2.out",
			})
			.from(paragraphSplit.words, {
				yPercent: 300,
				rotate: 3,
				ease: "power1.inOut",
				duration: 1,
				stagger: 0.01,
			});
		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".experience-section",
				start: "top 80%",
			},
		});
		titleTl.to(".experience-text-scroll", {
			duration: 1,
			opacity: 1,
			clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
			ease: "power1.inOut",
		});
	});

	return (
		<section id="experience" className="experience-section">
			<img
				src="/images/slider-dip.png"
				alt="background"
				className="w-full object-cover"
			/>
			<img 
				src="/images/Gemini_Generated_Image_ec201hec201hec20 (2).png" 
				alt="nassef-profile" 
				className="big-img opacity-10 grayscale-[20%] brightness-75"
			/>
			<div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
				<div className="relative inline-block md:translate-y-20">
					<div className="general-title relative flex flex-col justify-center items-center gap-24">
						<div className="overflow-hidden place-self-start">
							<h1 className="experience-title">Mon parcours</h1>
						</div>
						<div
							style={{
								clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
							}}
							className="experience-text-scroll place-self-start"
						>
							<div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
								<h2 className="text-milk-yellow">Professionnel</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="flex md:justify-center items-center translate-y-5">
					<div className="md:max-w-xs max-w-md">
						<p className="text-lg md:text-right text-balance font-paragraph">
							Expériences diversifiées en développement web, de la conception 
							à la réalisation de projets complets avec les dernières technologies.
						</p>
					</div>
				</div>
				<div className="nutrition-box">
					<div className="list-wrapper flex-col gap-8">
						{experiences.map((exp, index) => (
							<div key={index} className="relative flex-1 text-center max-w-md mx-auto">
								<div className="space-y-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
									<p className="md:text-xl text-lg font-bold text-primary">{exp.title}</p>
									<p className="font-paragraph text-base font-semibold text-gray-700">{exp.company}</p>
									<p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">{exp.period}</p>
									<p className="text-sm md:text-base font-paragraph text-balance leading-relaxed text-gray-800">
										{exp.description}
									</p>
									<span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium">
										{exp.type}
									</span>
								</div>
								{index !== experiences.length - 1 && (
									<div className="spacer-border mt-6" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;