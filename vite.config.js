import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 3000,
        open: true
    }, 
    css: {
        preprocessorOptions: {
            scss: {
              additionalData:`
              @import "./styles/style.scss";
              @import "./styles/parts/_reset.scss";
              @import "./styles/parts/_header.scss";
              @import "./styles/parts/_placeholders.scss";
              @import "./styles/parts/_variables.scss";
            `
            }
          }
    },
});
