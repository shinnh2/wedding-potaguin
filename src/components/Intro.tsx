import { useEffect } from "react";

type IntroProps = {
	onDone: () => void;
};

const MIN_DURATION = 1500; // 인트로 최소 노출 시간(ms)
const MAX_WAIT = 3000; // 이미지 로딩 최대 대기 시간(ms)

function Intro({ onDone }: IntroProps) {
	useEffect(() => {
		const startedAt = Date.now();
		const timers: number[] = [];
		let isFinished = false;

		// 이미지 로딩이 끝나도 최소 노출 시간은 채운다
		const finish = () => {
			if (isFinished) return;
			isFinished = true;
			const elapsed = Date.now() - startedAt;
			timers.push(window.setTimeout(onDone, Math.max(0, MIN_DURATION - elapsed)));
		};

		const img = new Image();
		img.src = `${import.meta.env.BASE_URL}key-visual.png`;
		img.onload = finish;
		img.onerror = finish; // 실패해도 진입은 시킨다
		timers.push(window.setTimeout(finish, MAX_WAIT));

		return () => timers.forEach(clearTimeout);
	}, [onDone]);

	return (
		<div className="intro">
			<p className="intro-deco">
				<img src="./penguin-snh.png" alt="" />
			</p>
			<p className="info-desc">
				초대장을 불러오고 있습니다!
			</p>
		</div>
	);
}

export default Intro;
