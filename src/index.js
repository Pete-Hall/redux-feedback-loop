import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const commentsReducer = (state = '', action) => {
  console.log('in commentsReducer:', action);
  return state;
}

const feelingReducer = (state = '', action) => {
  console.log('in feelingReducer:', action);
  if(action.type === 'SET_FEELING') {
    state = action.payload;
  }
  return state;
}

const supportReducer = (state = '', action) => {
  console.log('in supportReducer:', action);
  return state;
}

const understandingReducer = (state = '', action) => {
  console.log('in understandingReducer:', action);
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
