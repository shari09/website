import { createApp } from 'vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faBootstrap, faCss3, faGithub, faHtml5, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact  } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './index.css'

// library.add(faGithub, faEnvelope, faLinkedin, faHtml5, faNodeJs, faReact, faJava, faJs, faPython, faCss3, faDatabase, faBootstrap,)

createApp(App)
  // .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
