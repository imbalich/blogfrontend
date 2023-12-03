import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles.scss'
import "@popperjs/core";
// 引入项目依赖的bootstrap
import "bootstrap/dist/js/bootstrap";


URLSearchParams.prototype.appendIfExists = function (key, value) {
  if (value !== null && value !== undefined) {
      this.append(key, value)
  }
};

const app = createApp(App)
app.use(router)
app.mount('#app')