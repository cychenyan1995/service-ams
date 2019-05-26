import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './../components/login/login.vue';
import home from './../components/home/Home.vue';
import marketActive from './../components/marketActive/MarketActive.vue';
import Contact from './../components/contact/Contact.vue';
import Mine from './../components/mine/Mine.vue';
import {token,sessionOut} from './../util/core';
Vue.use(VueRouter);
Vue.config.productionTip = false;
//路由页面切换的时候，保持页面在滚动顶部显示
const scrollBehavior=(to,from,savedPosition)=>{
    if(savedPosition){
        return savedPosition;
    }else{
        const position ={};
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
        return position
    }
}
// 定义路由
const loginRouter = [
    {
        path: '/',component: home,meta: { scrollToTop: true },
        children:[
            // 默认页面
            {path: '/',component: marketActive,meta: { scrollToTop: true }},
            {path: '/contact',component: Contact ,meta: { scrollToTop: true }},
            {path: '/mine',component: Mine ,meta: { scrollToTop: true }},
        ]
    },
    {path: '/login',component: login,meta: { scrollToTop: true }}
];
const routes=[...loginRouter
             ];
// 创建router实例
const router = new VueRouter({
    mode:'history',
    base: __dirname,
    scrollBehavior,
    routes:routes,
});
//判断当前是否登录，则跳转相应的页面
// router.beforeEach((to,form,next)=>{
//     // 判断是否需要登录权限
//     if(to.matched.some(res => res.meta.requireAuth)){
//         // 判断是否登录
//         if(token()){
//             next();
//         }else{
//             next({
//                 path:'/login'
//             })
//         }
//     }else{
//         next();
//     }
// })
export default router;