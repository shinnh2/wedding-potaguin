import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/wedding-potaguin/", // 실제 GitHub 저장소 이름으로 교체
});
