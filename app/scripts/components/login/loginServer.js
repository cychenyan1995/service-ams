import {post} from '@/servers/httpServer';
//登录
export const login=async(params)=>{
    let result=await post('/login',params);
    return result.data;
}