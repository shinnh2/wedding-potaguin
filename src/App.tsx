import "./App.css";
import Visual from "./components/Visual";
import Invitaion from "./components/Invitation";
import Map from "./components/Map";
import Blessing from "./components/Blessing";
import Info from "./components/Info";

function App() {
	return (
		<div id="wrap">
			<main>
				<Visual />
				<Invitaion />
				<Map />
				<Blessing />
				<Info />
			</main>
			<footer>송인규, 신나현 드림.</footer>
		</div>
	);
}

export default App;
