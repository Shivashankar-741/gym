import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero1.css";

const Hero1 = () => {
	return (
		<div className="Hero1">
			<Navbar />
			<div className="Hero1--tag">
				<div className="Hero1--tag1">
					<h1 className="Hero1--tag1__in">BUILD UP YOUR</h1>
				</div>
				<div className="Hero1--tag2">
					<h1 className="Hero1--tag2__in">BODY SHAPE</h1>
				</div>
				<div className="Hero1--tag3">
					<p className="Hero1--tag3__in">
						Build Your Body and Fitness with Professional Touch
					</p>
				</div>
				<div className="Hero1--btn">
					<button className="Hero1--btn__in">JOIN US</button>
				</div>
			</div>
		</div>
	);
};

export default Hero1;
