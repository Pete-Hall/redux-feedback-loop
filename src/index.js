import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const commentsReducer = (state = '', action) => {
  console.log('in commentsReducer:', action);
  if(action.type === 'SET_COMMENTS') {
    state = action.payload;
  }
  return state;
}

const feelingReducer = (state = null, action) => {
  console.log('in feelingReducer:', action);
  if(action.type === 'SET_FEELING') {
    state = action.payload;
  }
  return state;
}

const supportReducer = (state = null, action) => {
  console.log('in supportReducer:', action);
  if(action.type === 'SET_SUPPORT') {
    state = action.payload;
  }
  return state;
}

const understandingReducer = (state = null, action) => {
  console.log('in understandingReducer:', action);
  if(action.type === 'SET_UNDERSTANDING') {
    state = action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    commentsReducer,
    feelingReducer,
    supportReducer,
    understandingReducer
  })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
