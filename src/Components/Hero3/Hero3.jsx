import React from "react";
import "./Hero3.css";
import gym0 from "../../assets/gymsidelogo0.svg";
import gym1 from "../../assets/gymsidelogo1.svg";
import gym2 from "../../assets/gymsidelogo2.svg";
import gym3 from "../../assets/gymsidelogo3.svg";

const Hero3 = () => {
	return (
		<div className="Hero3">
			<div className="Hero3--tag">
				<div className="Hero3--tag__in">
					<div className="Hero3--tag1">
						<h3 className="Hero3--tag1__in">OUR FEATURES</h3>
					</div>
					<div className="Hero3--tag2">
						<p className="Hero3--tag2__in">
							There are many variations of passages of lorem Ipsum available,
							but the majority have suffered alteration.
						</p>
					</div>
				</div>
				<ul className="Hero3--cards">
					<li className="card Hero3--cards__1">
						<img src={gym0} alt="" className="Hero3--cards__image" />
						<h2 className="Hero3--cards__head">Weightlifting</h2>
						<p className="Hero3--cards--para">
							There are many variations of passages of lorem Ipsum available.
						</p>
					</li>
					<li className="card Hero3--cards__2">
						<img src={gym1} alt="" className="Hero3--cards__image" />
						<h2 className="Hero3--cards__head">Specific Muscles</h2>
						<p className="Hero3--cards--para">
							There are many variations of passages of lorem Ipsum available.
						</p>
					</li>
					<li className="card Hero3--cards__3">
						<img src={gym2} alt="" className="Hero3--cards__image" />
						<h2 className="Hero3--cards__head">Flex Your Muscles</h2>
						<p className="Hero3--cards--para">
							There are many variations of passages of lorem Ipsum available.
						</p>
					</li>
					<li className="card Hero3--cards__4">
						<img src={gym3} alt="" className="Hero3--cards__image" />
						<h2 className="Hero3--cards__head">Cardio Exercises</h2>
						<p className="Hero3--cards--para">
							There are many variations of passages of lorem Ipsum available.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Hero3;
