import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 

import "./assets/styles/index.css";
import "./assets/styles/dasboard.css"


import '@fortawesome/fontawesome-free/css/all.css'
import '@fontsource/abril-fatface'
import '@fontsource/emilys-candy'
import '@fontsource/alfa-slab-one';


createApp(App).use(router).mount("#app");
