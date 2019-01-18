
import { LOAD_DATA } from '../constant/actionType'

const initState = {
    id:'',
    openid:'',
    nick:'',
    headImgURL:''
}
interface userState{
    id:string;
    openid:string;
    nick:string;
    headImgURL:string;
}
interface UserAction{
    type: LOAD_DATA;
    payload:userState;
}

export function user(state=initState, action:UserAction){
    switch(action.type){
        case LOAD_DATA:
            return {...state ,...action.payload}
        default:
            return state
    }
}