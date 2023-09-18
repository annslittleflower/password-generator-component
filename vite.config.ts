import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
	const config = {
		plugins: [react()],
		base: '/password-generator-component',
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		server: {
			port: 3333,
		},
	}

	return config
})
