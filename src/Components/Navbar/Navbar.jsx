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
				<li className="Navbar--list__in">
					<a href="">HOME</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#about">AB0UT</a>
				</li>
				<li className="Navbar--list__in">
					<a href="">PRICING</a>
				</li>
				<li className="Navbar--list__in">
					<a href="">GALLERY</a>
				</li>
				<li className="Navbar--list__in">
					<a href="">PAGES</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#blog">BLOG</a>
				</li>
				<li className="Navbar--list__in">
					<a href="">CONTACT</a>
				</li>
			</ul>
			<div className="Navbar--btn">
				<button className="Navbar--btn__in">JOIN US</button>
			</div>
		</div>
	);
};

export default Navbar;
