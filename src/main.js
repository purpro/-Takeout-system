import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import './assets/base.css'
import router  from './router/index';
// import { Button, Icon } from 'vant';按需引入不需要
import store from './store';
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import './api/mock'

const app = createApp(App)

app.use(store).use(router)
// app.use(Button).use(Icon)按需引入不需要
app.mount('#app')
