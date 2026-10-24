import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import frappeui from 'frappe-ui/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		frappeui({
			frappeProxy: {
				port: 8080,
				source: '^/(app|login|api|assets|files|private|razorpay_checkout)',
			},
			jinjaBootData: true,
			lucideIcons: true,
			buildConfig: {
				indexHtmlPath: '../wiki/www/wiki.html',
				emptyOutDir: true,
				sourcemap: true,
			},
		}),
		vue(),
	],
	build: {
		chunkSizeWarningLimit: 1500,
		outDir: '../wiki/public/frontend',
		emptyOutDir: true,
		target: 'es2015',
		sourcemap: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
		},
	},
	optimizeDeps: {
		include: ['highlight.js/lib/core'],
	},
	server: {
		allowedHosts: true,
	},
});
