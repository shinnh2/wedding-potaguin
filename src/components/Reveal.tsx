import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
};

function Reveal({ children }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setIsVisible(true);
				observer.unobserve(el); // 한 번만 실행
			},
			{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
			{children}
		</div>
	);
}

export default Reveal;
