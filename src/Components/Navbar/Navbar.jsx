import React from "react";
import gymLogo from "../../assets/gymlogo.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="Navbar--logo">
				<img src={gymLogo} alt="gymlogo" className="Navbar--logo__in" />
			</div>
			<ul className="Navbar--list">
				<li className="Navbar--list__in">HOME</li>
				<li className="Navbar--list__in">AB0UT</li>
				<li className="Navbar--list__in">PRICING</li>
				<li className="Navbar--list__in">GALLERY</li>
				<li className="Navbar--list__in">PAGES</li>
				<li className="Navbar--list__in">BLOG</li>
				<li className="Navbar--list__in">CONTACT</li>
			</ul>
			<div className="Navbar--btn">
				<button className="Navbar--btn__in">JOIN US</button>
			</div>
		</div>
	);
};

export default Navbar;
