import {GeeTest} from '@/servers/gtServer.js';
import {login} from './loginServer.js';
export default {
  //初始化页面交互值
  data(){
    return {

    }
  },
  //页面未渲染前执行
  beforeMount () {
    //this.login();
  },
  computed:{

  },
  mounted () {
    
  },
  //页面交互
  methods:{
    //登录
    login(){
      let params={};
      login(params).then(res=>{
        
      })
      // GeeTest('#captcha','float','100%').then(res=>{
         
      // })
    }
  }
}