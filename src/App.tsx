import React from 'react'
import { Route, Switch} from 'react-router-dom';

import AuthLogin from './component/authLogin/authLogin';
import Dashboard from './component/dashboard/dashboard';
import Login from './component/authLogin/login';

interface state{
  hasError: boolean;
  err:any
}

class App extends React.Component<any,state>{
    constructor(props:{}){
        super(props)
        this.state={
            hasError:false,
            err:''
        }
    }
    componentDidCatch(err:any,info:any){
        this.setState({
            hasError:true,
            err
        })
    }
    render(){
        const { hasError, err} = this.state
        return hasError?( 
          <div>
              <h2>你的系统版本过低，请升级</h2>
              <div>{ err.stack?err.stack.toString():err.toString()}</div>
          </div>
        ):(
          <Switch>
              <Route key="login" path='/login' component={Login}></Route>
              <AuthLogin>
                  <Route component={Dashboard}></Route>
              </AuthLogin>
          </Switch>
      )
    }
}
export default App