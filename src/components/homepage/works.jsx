import React from "react";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<>
			<div className="works">
				<Card
					icon={faBriefcase}
					title="Work"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="./tlm.png"
									alt="The Last Mile logo"
									className="work-image"
									/>
								<div className="work-title">The Last Mile</div>
								<div className="work-subtitle">
									Web Development Apprenticeship
								</div>
								<div className="work-duration">Jun 2023 - Sept 2023</div>
							</div>
						</div>
					}
					/>
			</div>
			<div className="works" style={{marginTop: "20px"}}>
				<Card
					icon={faGraduationCap}
					title="Education"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="./flatiron.png"
									alt="Flatiron logo"
									className="work-image"
									/>
								<div className="work-title">Flatiron School</div>
								<div className="work-subtitle">
									Certificate
								</div>
								<div className="work-duration">Sept 2023 - Dec 2023</div>
							</div>
							<div className="work">
								<img
									src="./tlm.png"
									alt="The Last Mile Logo"
									className="work-image"
									/>
								<div className="work-title">The Last Mile</div>
								<div className="work-subtitle">
									Certificate
								</div>
								<div className="work-duration">March 2022 - Feb 2023</div>
							</div>
						</div>
					}
					/>
			</div>
		</>
	);
};

export default Works;
