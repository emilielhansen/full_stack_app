import { defineConfig } from "vitest/config"; 

//configuration object 
export default defineConfig({ 
    test: {
        globals: true,
        environment: "jsdom", 
    }, 
});