import "./App.css";
import Visual from "./components/Visual";
import Invitaion from "./components/Invitation";
import Map from "./components/Map";
import Blessing from "./components/Blessing";
import Info from "./components/Info";
import ButtonTop from "./components/ButtonTop";
import Reveal from "./components/Reveal";
import Intro from "./components/Intro";
import { useState } from "react";

function App() {
	const [isIntroDone, setIsIntroDone] = useState(false);

	if (!isIntroDone) {
		return <Intro onDone={() => setIsIntroDone(true)} />;
	}

	return (
		<div id="wrap">
			<main>
				<Reveal>
					<Visual />
				</Reveal>
				<Reveal>
					<Invitaion />
				</Reveal>
				<Reveal>
					<Map />
				</Reveal>
				<Reveal>
					<Blessing />
				</Reveal>
				<Reveal>
					<Info />
				</Reveal>
			</main>
			<footer>송인규, 신나현 드림.</footer>
			<ButtonTop/>
		</div>
	);
}

export default App;
