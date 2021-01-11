import React from "react";
import gymLogo from "../../assets/gymlogo.png";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
	const [click, setClick] = React.useState(false);
	return (
		<div className="Navbar">
			<div className="nav-1">
				<div className="Navbar--logo">
					<img src={gymLogo} alt="gymlogo" className="Navbar--logo__in" />
				</div>
				<div
					className="menu-icon"
					onClick={() => {
						setClick(!click);
					}}
				>
					{click ? <FaTimes /> : <FaBars />}
				</div>
			</div>
			<ul className={click ? "Navbar--list " : "Navbar--list active"}>
				<li className="Navbar--list__in">
					<a href="#home">HOME</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#about">AB0UT</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#pricing">PRICING</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#gallery">GALLERY</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#pages">PAGES</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#blog">BLOG</a>
				</li>
				<li className="Navbar--list__in">
					<a href="#contact">CONTACT</a>
				</li>
			</ul>
			{/* <div className="Navbar--btn">
				<button className="Navbar--btn__in">JOIN US</button>
			</div> */}
		</div>
	);
};

export default Navbar;
