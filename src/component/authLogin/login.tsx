import React from 'react'
import {connect} from 'react-redux'

import { TO_GET_LOGIN, ISMOBILEMODE as isMoblieMode } from '../../constant/actionType'
import { getQueryString, getStorage, } from '../../util'

import "./style.css"

interface payload{
    isMoblieMode:boolean;
    code:string;
}
interface dispatchParm{
    type:TO_GET_LOGIN;
    payload:payload;
    callback:()=>void
}

const dispatchMapProps = (dispatch: (parm:dispatchParm)=>void) => ({
    getUserLogin: (payload: payload,callback:()=>void) => dispatch({type: TO_GET_LOGIN, payload,callback}),
})

function Login(props:any){
    const code = getQueryString("code")
    props.getUserLogin({isMoblieMode, code},()=>{
        window.location.href = getStorage('path')||'temple'
    }) 
    return <div>
                <div className='center'>
                    加载用户信息。。
                </div>
            </div>
}

export default connect( null, dispatchMapProps )(Login)
