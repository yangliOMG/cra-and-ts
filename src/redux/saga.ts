import { put, call, all, fork, take } from 'redux-saga/effects'

import {  getUserLogin, getHistoryByType, getTempleById } from '../service/api'
import {  TO_GET_LOGIN, LOAD_DATA, TO_GET_TEMPLE } from '../constant/actionType'
import {  setStorage } from '../util'

export function * rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchTemMes),
    ]);
}
export function* watchLogin(){
    while(true){
        const action = yield take(TO_GET_LOGIN)
        const { isMoblieMode,code } = action.payload
        const callback = action.callback
        let res = yield call(getUserLogin, isMoblieMode,code)
        try {
            const { id, openid, nick, headImgURL } = res.data
            if(id){
                const userinfo = {id , openid , nick , headImgURL }
                setStorage('user', userinfo )
                yield put({ type: LOAD_DATA, payload: userinfo })
                if(callback){
                    callback()
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
}
export function* watchTemMes(){
    while(true){
        const action1 = yield take(TO_GET_TEMPLE)
        const { id,ifset=false } = action1.payload
        const callback = action1.callback
        const res = yield call(getHistoryByType,0)
        try {
            if(id||res.data.oid){
                const res2 = yield call(getTempleById,id||res.data.oid,ifset)
                if(res2.status === 200&&res2.data.temple.length>0){
                    callback(res2.data)
                }
            }else{
                window.location.href = '/templeList'
            }
        } catch (error) {
            console.log(error)
        }
    }
}
