import React from "react";
import "./Gallery.css";
import gallery1 from "../../assets/grid1.png";
import gallery2 from "../../assets/grid2.png";
import gallery3 from "../../assets/grid3.png";
import gallery4 from "../../assets/grid4.png";
import gallery5 from "../../assets/grid5.png";
import gallery6 from "../../assets/grid6.png";

const Gallery = () => {
	return (
		<div className="Gallery" id="gallery">
			<img src={gallery1} alt="img1" className="Gallery--img1 imgs" />
			<img src={gallery2} alt="img1" className="Gallery--img2 imgs" />
			<img src={gallery3} alt="img1" className="Gallery--img3 imgs" />
			<img src={gallery4} alt="img1" className="Gallery--img4 imgs" />
			<img src={gallery5} alt="img1" className="Gallery--img5 imgs" />
			<img src={gallery6} alt="img1" className="Gallery--img6 imgs" />
		</div>
	);
};

export default Gallery;
