import "./App.css";
import Hero1 from "./Components/Hero1/Hero1.jsx";
import Hero2 from "./Components/Hero2/Hero2.jsx";
import Hero3 from "./Components/Hero3/Hero3.jsx";
import Hero4 from "./Components/Hero4/Hero4";
import Pricing from "./Components/Pricing/Pricing";
import Gallery from "./Components/Gallery/Gallery";
import Trainers from "./Components/Trainers/Trainers";

function App() {
	return (
		<div className="App">
			<Hero1 />
			<Hero2 />
			<Hero3 />
			<Hero4 />
			<Pricing />
			<Gallery />
			<Trainers />
		</div>
	);
}

export default App;
