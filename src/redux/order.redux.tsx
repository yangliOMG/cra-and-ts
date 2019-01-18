import { UPDATEORDER, INITORDER, UPDATEPOSITION } from '../constant/actionType'

const initState = {
    blessing:'',
    num:1,
    duration:1,
    position:[],
    id:'',
}
interface orderState{
    blessing:string;
    num:number;
    duration:number;
    position:[];
    id:string;
}
interface orderAction{
    type: UPDATEORDER | INITORDER | UPDATEPOSITION;
    payload:orderState;
}
export function order(state=initState, action:orderAction){
    switch(action.type){
        case UPDATEORDER:
            return {...state, ...action.payload}
        case INITORDER:
            return {...state, ...initState}
        case UPDATEPOSITION:
            let position = state.position.filter(v=>!action.payload.position.includes(v[0]))
            return {...state, position}
        default:
            return state
    }
}