import { createApp } from 'vue'
import App from './App.vue'
import {invokeListener} from "@/scanner/scanner";

createApp(App).mount('#app')

window.pct = {
    scan: function(...args) {
        return invokeListener(...args);
    }
}