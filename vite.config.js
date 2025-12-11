import { defineConfig } from "vite";

export default defineConfig ({
    server: {
        hmr: {
            overlay: false,
        }
    },

    base: 'https://karlgeztor84.github.io',
})
