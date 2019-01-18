import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {order} from './redux/order.redux'
// import {praydata} from './redux/temple.redux.jsx'
// import {prayList} from './redux/pray.redux.jsx'


export default combineReducers({user, order})