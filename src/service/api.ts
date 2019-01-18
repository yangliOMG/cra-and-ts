import axios from "./axios"
// import qs from 'qs'

export async function getUserLogin(isMoblieMode:boolean,code:string) {
    return axios.get(`/login/login.do`,{params: {
        isMoblieMode,code
      }})
}
export async function getHistoryByType(type:number) {
    return axios.get(`/history/recent.do`,{params: {
        type
    }})
}
export async function getTempleById(tid:number,ifset?:boolean) {
    return axios.get(`/temple/info.do`,{params: {
        tid,ifset
    }})
}