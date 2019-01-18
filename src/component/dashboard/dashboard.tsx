import React from 'react'
import { Route, Redirect} from 'react-router-dom' 
// import { AnimatedSwitch } from './react-router-transition';

import {setStorage, getStorage, comparePath,} from '../../util'
import asyncComponent from './AsyncComponent'

const Temple = asyncComponent(() => import("../../pray/temple/temple"))


class Dashboard extends React.Component<any,any>{

    componentDidMount(){
        let height = document.documentElement.clientHeight
        let $root = document.getElementById('root')
        if($root){
            $root.style.height = height +'px'
        }
    }
    render(){
        const {pathname}  = this.props.location
        const navList = [
            {path:'/temple',title:'寺院',component:Temple,father:['/templeList','/myCarelist','/myHistory'],son:['/templeDetail','/pay/prayForm']},
        ]
        const page = navList.find(v=>v.path===pathname)
        if(page){
            let lastPath = getStorage('lastPath')
            let plus = comparePath(lastPath,page) === 'father'? -1:1
            setStorage('lastPath',pathname)
            let height = 500
            if(typeof document !== 'undefined'){
                height = document.documentElement.clientHeight
                document.title = page.title
            }
            return (
                <div>
                    {/* <AnimatedSwitch
                        atEnter={{ opacity: 0, foo: 0 }}
                        atLeave={{ opacity: 0, foo: 2 }}
                        atActive={{ opacity: 1, foo: 1 }}
                        mapStyles={(styles:any) => {
                            let x = plus * (styles.foo-1)*100
                            let val = x===0? 'none': 'translateX(' + x + '%)'
                            return {
                                position: (styles.foo <= 1) ? 'relative': 'absolute',
                                width: '100%',
                                height: height+'px',
                                opacity: styles.opacity,
                                transform: val
                            }
                        }}
                        > */}
                        <Route key={page.path} path={page.path} component={page.component}></Route>
                    {/* </AnimatedSwitch> */}
                </div>
            )
        }else{
            return <Redirect to='/temple'></Redirect>
        }
    }
}

export default Dashboard