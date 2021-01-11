import React from "react";
import trainer1 from "../../assets/card1.png";
import trainer2 from "../../assets/card2.png";
import trainer3 from "../../assets/card3.png";
import "./Trainers.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Trainers = () => {
	return (
		<div className="Trainers" id="pages">
			<div className="Trainers--tag">
				<h1 className="Trainers--tag__1">OUR TRAINERS</h1>
				<p className="Trainers--tag__2">
					There are many variations of passages of lorem Ipsum available, but
					the majority have suffered alteration.
				</p>
			</div>
			<ul className="Trainers--cards">
				<li className="Trainers--card">
					<div className="Trainers--card__img">
						<img src={trainer1} alt="" className="Trainers--card__imgIn" />
						<ul className="Trainers--media">
							<li className="Trainers--media__facebook icons">
								<FiFacebook className="facebook" />
							</li>
							<li className="Trainers--media__twitter icons">
								<FiTwitter className="twitter" />
							</li>
							<li className="Trainers--media__instagram icons">
								<FiInstagram className="instagram" />
							</li>
						</ul>
					</div>
					<div className="Trainers--details">
						<h2 className="Trainers--details__name">Jessica Mino</h2>
						<h3 className="Trainers--details__gender">Woman Trainer</h3>
					</div>
				</li>
				<li className="Trainers--card">
					<div className="Trainers--card__img">
						<img src={trainer2} alt="" className="Trainers--card__imgIn" />
						<ul className="Trainers--media">
							<li className="Trainers--media__facebook icons">
								<FiFacebook className="facebook" />
							</li>
							<li className="Trainers--media__twitter icons">
								<FiTwitter className="twitter" />
							</li>
							<li className="Trainers--media__instagram icons">
								<FiInstagram className="instagram" />
							</li>
						</ul>
					</div>
					<div className="Trainers--details">
						<h2 className="Trainers--details__name">Amit Khan</h2>
						<h3 className="Trainers--details__gender">Men Trainer</h3>
					</div>
				</li>
				<li className="Trainers--card">
					<div className="Trainers--card__img">
						<img src={trainer3} alt="" className="Trainers--card__imgIn" />
						<ul className="Trainers--media">
							<li className="Trainers--media__facebook icons">
								<FiFacebook className="facebook" />
							</li>
							<li className="Trainers--media__twitter icons">
								<FiTwitter className="twitter" />
							</li>
							<li className="Trainers--media__instagram icons">
								<FiInstagram className="instagram" />
							</li>
						</ul>
					</div>
					<div className="Trainers--details">
						<h2 className="Trainers--details__name">Paulo Rolac</h2>
						<h3 className="Trainers--details__gender">Men Trainer</h3>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Trainers;
