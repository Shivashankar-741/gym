import React from "react";
import "./Hero2.css";

const Hero2 = () => {
	return (
		<div className="Hero2" id="blog">
			<div className="Hero2--girl">
				<div className="Hero2--girl__tag">
					<h2 className="Hero2--girl__tag1">FOR GIRL</h2>
					<p className="Hero2--girl__tag2">
						There are many variations of passages of lorem Ipsum available, but
						the majority have suffered alteration.
					</p>
					<div className="Hero2--btn">
						<button className="Hero2--btn__in">JOIN NOW</button>
					</div>
				</div>
			</div>
			<div className="Hero2--boys">
				<div className="Hero2--boys__tag">
					<h2 className="Hero2--boys__tag1">FOR BOYS</h2>
					<p className="Hero2--boys__tag2">
						There are many variations of passages of lorem Ipsum available, but
						the majority have suffered alteration.
					</p>
					<div className="Hero2--btn">
						<button className="Hero2--btn__in">JOIN NOW</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
