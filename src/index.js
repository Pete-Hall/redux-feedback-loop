import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const commentsReducer = (state = '', action) => { // if the input is changed and then deleted, sends an empty string. change null to ''? empty string is falsey but it is a datatype. null is null
  console.log('in commentsReducer:', action);
  if(action.type === 'SET_COMMENTS') {
    state = action.payload;
  } else if(action.type === 'SET_RESTART') {
    state = action.payload;
  }
  return state;
}

const feelingReducer = (state = '', action) => {
  console.log('in feelingReducer:', action);
  if(action.type === 'SET_FEELING') {
    state = action.payload;
  } else if(action.type === 'SET_RESTART') {
    state = action.payload;
  }
  return state;
}

const supportReducer = (state = '', action) => {
  console.log('in supportReducer:', action);
  if(action.type === 'SET_SUPPORT') {
    state = action.payload;
  } else if(action.type === 'SET_RESTART') {
    state = action.payload;
  }
  return state;
}

const understandingReducer = (state = '', action) => {
  console.log('in understandingReducer:', action);
  if(action.type === 'SET_UNDERSTANDING') {
    state = action.payload;
  } else if(action.type === 'SET_RESTART') {
    state = action.payload;
  }
  return state;
}

///// The way Dev taught us
// const store = createStore(
//   combineReducers({
//     commentsReducer,
//     feelingReducer,
//     supportReducer,
//     understandingReducer
//   })
// )

///// TRYING TO UNDERSTAND THE ROOT REDUCER /////
///// https://www.digitalocean.com/community/tutorials/redux-reset-state-redux
///// https://stackoverflow.com/questions/59061161/how-to-reset-state-of-redux-store-when-using-configurestore-from-reduxjs-toolki?noredirect=1&lq=1
///// the follow code block works, but I get this error/warning: the previous state recieved by the reducer has unexpected type of "string." Expected argument to be an object with the follow keys: "commentsReducer", "feelingReducer", "supportReducer", "understandingReducer"

const appReducer = combineReducers({
  commentsReducer,
  feelingReducer,
  supportReducer,
  understandingReducer
})

const rootReducer = (state, action) => {
  console.log('in rootReducer');
  if(action.type === 'RESET_SCORES') {
   state = action.payload;
  }
  return appReducer(state, action)
}

const store = createStore(
  rootReducer
 )

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
