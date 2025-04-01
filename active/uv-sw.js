async function loadServiceWorkerScript() {
    try {
        // Try importing the script from GitHub Pages
        importScripts("/active/uv/uv.sw.js");
        console.log("Service Worker script loaded from GitHub Pages.");
    } catch (error) {
        console.warn("Failed to load Service Worker script from GitHub Pages. Trying fallback...");
        try {
            // Try importing from the Vercel backup
            importScripts("https://nyxbackendstuff.vercel.app/uv.sw.js");
            console.log("Service Worker script loaded from Vercel.");
        } catch (fallbackError) {
            console.error("Failed to load Service Worker script from both sources.", fallbackError);
        }
    }
}

loadServiceWorkerScript();

const sw = new UVServiceWorker();
self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
