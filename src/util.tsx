import { Toast } from 'antd-mobile';

/**
 * 获取url参数
 * @param {参数key} name 
 */
export function getQueryString(name:string): string|null{
    if(typeof window === "undefined"){
        return ""
    }
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
/**
 * 将#转换为id=
 * @param {url} href 
 */
export function compatUrl(href:string){
    if(href.indexOf('#')>=0){
        if(href.indexOf('?')>=0){
            href = href.replace('#','&id=')
        }else{
            href = href.replace('#','?id=')
        }
    }
    return href
}
/**
 * 存缓存
 * @param {key} name 
 * @param {value} data 
 */
export function setStorage(name:string,data:string | object):void{
    if(typeof window === "undefined"){
        return 
    }
    let dataType = typeof data;
    if(typeof data === 'object'){
        window.localStorage.setItem(name,JSON.stringify(data));
    }else if(['number','string','boolean'].includes(dataType)){
        window.localStorage.setItem(name,data);
    }else{
        alert('不能存')
    }
}
/**
 * 取缓存
 * @param {key} name 
 */
export function getStorage(name:string):any{
    if(typeof window === "undefined"){
        return ""
    }
    let data = window.localStorage.getItem(name);
    let dataType = typeof data;
    if(['number','string','boolean'].includes(dataType)&&data!=null){
        try {  
            return JSON.parse(data)||""
        } catch(e) {  
            return data||""
        }  
    }else{
        return "";
    }
}
/**
 * 删缓存
 * @param {key} name 
 */
export function removeStorage(name:string):void{
    window.localStorage.removeItem(name)
}
/**
 * 弹出框
 * @param {内容} msg 
 * @param {时长（秒）} duration 
 * @param {结束回调} fn 
 */
export function showLoading(msg:string,duration=1,fn?:()=>void):void {
    Toast.loading(msg, duration, fn)
}
/**
 * 比较页面父子关系
 * @param {历史页} lastPath 
 * @param {当前页} page 
 */
export function comparePath(lastPath:string,page:any){
    let relationship = 'father'
    if(page.father && page.father.length>0){
        relationship = page.father.includes(lastPath)? 'father' : relationship
    }
    if(page.son && page.son.length>0){
        relationship = page.son.includes(lastPath) ? 'son' : relationship
    }
    return relationship
}