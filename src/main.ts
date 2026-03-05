import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 

// file css
// import "./assets/styles/index.css";
import "./assets/styles/dashboard.css"

// font awesome
import '@fortawesome/fontawesome-free/css/all.css'

// font stlye
import '@fontsource/abril-fatface'
import '@fontsource/emilys-candy'
import '@fontsource/alfa-slab-one';
 

import '@fontsource/dm-serif-display/400.css'
// import '@fontsource/dm-serif-display/400-italic.css'

import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/roboto-slab/700.css'

import '@fontsource/spectral/400.css'
import '@fontsource/spectral/500.css'
import '@fontsource/spectral/600.css'
import '@fontsource/spectral/700.css'

createApp(App).use(router).mount("#app");
