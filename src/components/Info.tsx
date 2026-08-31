import { useState } from "react";

function Info() {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText("https://shinnh2.github.io/wedding-potaguin/");
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 3000);
		} catch {
			alert("복사에 실패했습니다. 주소창의 링크를 직접 복사해 주세요.");
		}
	};

	const handleShare = async () => {
		if (!navigator.share) {
			handleCopyLink();
			return;
		}
		try {
			await navigator.share({
				title: "송인규 ♥ 신나현 결혼합니다!",
				text: "결혼식에 초대합니다.",
				url: "https://shinnh2.github.io/wedding-potaguin/",
			});
		} catch (err) {
			if ((err as Error).name === "AbortError") return;
			alert("공유에 실패했습니다.");
		}
	};

	return (
		<section>
			<p className="info-deco">
				<img src="./penguin-snh.png" alt="" />
			</p>
			<p className="info-desc">
				본 결혼식은 결혼 예배로 드려집니다.
				<br />
				하객 여러분의 양해 부탁드립니다.
				<br />
				감사합니다.
			</p>
			<div className="share-buttons">
				<button className="share-button" onClick={handleCopyLink}>
					{isCopied ?
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
						:
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M318-120q-82 0-140-58t-58-140q0-40 15-76t43-64l134-133 56 56-134 134q-17 17-25.5 38.5T200-318q0 49 34.5 83.5T318-200q23 0 45-8.5t39-25.5l133-134 57 57-134 133q-28 28-64 43t-76 15Zm79-220-57-57 223-223 57 57-223 223Zm251-28-56-57 134-133q17-17 25-38t8-44q0-50-34-85t-84-35q-23 0-44.5 8.5T558-726L425-592l-57-56 134-134q28-28 64-43t76-15q82 0 139.5 58T839-641q0 39-14.5 75T782-502L648-368Z"/></svg>
					}
					<span>{isCopied ? "링크 복사됨" : "청첩장 링크 복사"}</span>
				</button>
				<button className="share-button" onClick={handleShare}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"/></svg>
					<span>청첩장 공유</span>
				</button>
			</div>
		</section>
	);
}

export default Info;
