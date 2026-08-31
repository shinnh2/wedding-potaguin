import { useState, useEffect } from "react";

function ButtonTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();                    // 새로고침 시 이미 내려가 있는 경우 대비
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

	return (
        isVisible && (
            <button className="button-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-640v-80h480v80H240Zm56 416-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg>
            </button>
        )
	);
}

export default ButtonTop;