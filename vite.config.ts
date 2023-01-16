import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/dt/search',
	server: {
		host: '0.0.0.0',
		fs: {
			// strict: false,
		},
		// hmr: false,
	},
	optimizeDeps: {
		include: [

		]
	}
})