import Vue from 'vue';
import App from './components/app.vue';
import router from './routers/router';
import './filter/filter';
import { setDPR, remChange } from './../js/remChange';
// 计算html的font-size  rem适配
setDPR();
remChange();

new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app")