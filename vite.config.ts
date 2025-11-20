import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This makes process.env.API_KEY available in the source code
      // We prioritize the environment variable, but fallback to the provided key
      'process.env.API_KEY': JSON.stringify(env.API_KEY || "AIzaSyA2FYTHzCn9hK9Fpr91GwIr8aunNGj52B8"),
    },
  };
});