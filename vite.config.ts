import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({
	plugins: [react()],
	server: { allowedHosts: ['hjmmhw-5173.csb.app'] },
	test: { environment: 'node' },
});
