import React from "react";
import "./Contact.css";

const Contacts = () => {
	return (
		<div className="Contacts">
			<div className="Contacts--address">
				<div className="Contacts--address--title">Gym</div>
				<p className="Contacts--address--tag">
					5th flora, 700/D kings road, green lane New York-1782
				</p>
			</div>
			<div className="Contacts--links">
				<div className="Contacts--links__title">Useful Links</div>
				<ul className="Contacts--link__list">
					<li className="Contacts--link__listIn1">Pricing</li>
					<li className="Contacts--link__listIn2">About</li>
					<li className="Contacts--link__listIn3">Gallery</li>
					<li className="Contacts--link__listIn4">Contact</li>
				</ul>
			</div>
			<div className="Contacts-input">
				<div className="contacts--input__title">Subscribe</div>
				<input type="text" className="contacts--input__field" />
				<p className="Contacts--input__para">
					Esteem spirit temper too say adieus who direct esteem esteems luckily.
				</p>
			</div>
		</div>
	);
};

export default Contacts;
