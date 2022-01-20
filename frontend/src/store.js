import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducers} from './reducers/userReducers'
import {activityCreateReducers} from './reducers/activityReducers'
import {activityListReducers} from './reducers/activityReducers'
import {accessCreateReducers} from './reducers/accessReducers'
import {accessListReducers} from './reducers/accessReducers'
import {addFeedbackReducers,getFeedbackReducers} from './reducers/feedbackReducers'
const reducer = combineReducers({
   
    userLogin:userLoginReducers,
    addActiviy:activityCreateReducers,
    listActivity:activityListReducers,
    addAccess:accessCreateReducers,
    listAccess:accessListReducers,
    addFeedback:addFeedbackReducers,
    getFeedback:getFeedbackReducers,
   

})
const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) :null


const initialState ={
  
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]
const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store