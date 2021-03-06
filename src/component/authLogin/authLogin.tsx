import {  ISMOBILEMODE } from '../../constant/actionType'
import {   getStorage, compatUrl,  setStorage} from '../../util'

function AuthLogin(props:any){      
    if(typeof document !== 'undefined'){
        const user = getStorage('user')
        if(user === ''|| !user.openid){
            setStorage('path',compatUrl(window.location.href))
            if(ISMOBILEMODE){
                let appid = 'wxf707fc6da6cf1a2f',//瑞金网络'wxf707fc6da6cf1a2f',福佑法缘'wx9ce81988a89adfc4'，金品购'wxf1f524212dffeab5'
                    RedicetURI = window.location.origin+'/login',
                    uri = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${RedicetURI}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`
                window.location.href = uri;
            }else{
                window.location.href = '/login'
            }
        }
    }
    return props.children
}

export default AuthLogin