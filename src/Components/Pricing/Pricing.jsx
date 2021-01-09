import React from "react";
import "./Pricing.css";

const Pricing = () => {
	return (
		<div className="Pricing">
			<div className="Pricing--tag">
				<div className="Pricing--tag1">
					<h1 className="Pricing--tag1__in">OUR PRICING</h1>
				</div>
				<div className="Pricing--tag2">
					<p className="Pricing--tag2__in">
						There are many variations of passages of lorem Ipsum available, but
						the majority have suffered alteration.
					</p>
				</div>
			</div>
			<ul className="Pricing--cards">
				<li className="Pricing--card">
					<div className="Pricing--card__tag">
						<div className="Pricing--card__tag1">
							<h1 className="Pricing--card__tag1In">BEGINNER</h1>
						</div>
						<div className="Pricing--card__tag2">
							<h1 className="Pricing--card__tag2In">$45/M</h1>
						</div>
					</div>
					<ul className="Pricing--card__list">
						<li className="Pricing--card__listIn">24h unlimited access</li>
						<li className="Pricing--card__listIn">Trainer Advice</li>
						<li className="Pricing--card__listIn gray">Locker + Bathroom</li>
						<li className="Pricing--card__listIn gray">Personal trainer</li>
					</ul>
					<div className="Pricing--card__btn">
						<button className="Pricing--card__btnIn">JOIN NOW</button>
					</div>
				</li>
				<li className="Pricing--card">
					<div className="Pricing--card__tag">
						<div className="Pricing--card__tag1">
							<h1 className="Pricing--card__tag1In"> EXPERT</h1>
						</div>
						<div className="Pricing--card__tag2">
							<h1 className="Pricing--card__tag2In">$65/M</h1>
						</div>
					</div>
					<ul className="Pricing--card__list">
						<li className="Pricing--card__listIn">24h unlimited access</li>
						<li className="Pricing--card__listIn">Trainer Advice</li>
						<li className="Pricing--card__listIn gray">Locker + Bathroom</li>
						<li className="Pricing--card__listIn gray">Personal trainer</li>
					</ul>
					<div className="Pricing--card__btn">
						<button className="Pricing--card__btnIn">JOIN NOW</button>
					</div>
				</li>
				<li className="Pricing--card">
					<div className="Pricing--card__tag">
						<div className="Pricing--card__tag1">
							<h1 className="Pricing--card__tag1In">PRO</h1>
						</div>
						<div className="Pricing--card__tag2">
							<h1 className="Pricing--card__tag2In">$75/M</h1>
						</div>
					</div>
					<ul className="Pricing--card__list">
						<li className="Pricing--card__listIn">24h unlimited access</li>
						<li className="Pricing--card__listIn">Trainer Advice</li>
						<li className="Pricing--card__listIn gray">Locker + Bathroom</li>
						<li className="Pricing--card__listIn gray">Personal trainer</li>
					</ul>
					<div className="Pricing--card__btn">
						<button className="Pricing--card__btnIn">JOIN NOW</button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Pricing;
