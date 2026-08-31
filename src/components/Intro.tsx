import { useEffect, useState } from "react";

type IntroProps = {
	onDone: () => void;
};

const MIN_DURATION = 1600; // 인트로 최소 노출 시간(ms)
const MAX_WAIT = 3000; // 이미지 로딩 최대 대기 시간(ms)
const FADE_DURATION = 600; // 페이드아웃 시간(ms) - App.css의 transition 값과 맞출 것

function Intro({ onDone }: IntroProps) {
	const [isLeaving, setIsLeaving] = useState(false);

	useEffect(() => {
		const startedAt = Date.now();
		const timers: number[] = [];
		let isFinished = false;

		// 이미지 로딩이 끝나도 최소 노출 시간은 채운다
		const finish = () => {
			if (isFinished) return;
			isFinished = true;
			const elapsed = Date.now() - startedAt;

			timers.push(
				window.setTimeout(() => {
					setIsLeaving(true); // 페이드아웃 시작
					timers.push(window.setTimeout(onDone, FADE_DURATION)); // 끝나면 언마운트
				}, Math.max(0, MIN_DURATION - elapsed))
			);
		};

		const img = new Image();
		img.src = `${import.meta.env.BASE_URL}key-visual.png`;
		img.onload = finish;
		img.onerror = finish; // 실패해도 진입은 시킨다
		timers.push(window.setTimeout(finish, MAX_WAIT));

		return () => timers.forEach(clearTimeout);
	}, [onDone]);

	return (
		<div className={`intro ${isLeaving ? "leaving" : ""}`}>
			{/* <p className="intro-deco">
				<img src="./penguin-snh.png" alt="" />
			</p> */}
			<p className="intro-desc">
				2026.11.21.<br/>
				송인규 ♥ 신나현의<br/>
				결혼식에 초대합니다.
			</p>
		</div>
	);
}

export default Intro;
