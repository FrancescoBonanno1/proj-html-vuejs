import { createApp } from 'vue'
import App from './App.vue'

// importo bootstrap (js)
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBriefcase, faFilm, faGear, faHome, faImage, faPhotoFilm, faRocket, faThumbsUp, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHome);
library.add(faBriefcase);
library.add(faRocket);
library.add(faThumbsUp);
library.add(faGear);
library.add(faUsers, faVideo, faImage, faFilm)

window.vue = {};
window.vue.App = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
