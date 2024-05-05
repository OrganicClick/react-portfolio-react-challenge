import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change the port to your desired port
    open: true, // Open the default browser when the server starts
    // Add additional server options here if needed
  },
});
