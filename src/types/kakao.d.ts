// 카카오 JavaScript SDK (index.html에서 전역 스크립트로 로드)
declare global {
	interface Window {
		Kakao?: {
			init: (jsKey: string) => void;
			isInitialized: () => boolean;
			Share: {
				sendDefault: (settings: Record<string, unknown>) => void;
			};
		};
	}
}

export {};
