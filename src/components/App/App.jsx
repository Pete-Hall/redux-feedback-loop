import React from 'react';
import axios from 'axios';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Admin from '../Admin/Admin';

function App() {

  const currentComments = useSelector(store => store.commentsReducer);
  const currentFeeling = useSelector(store => store.feelingReducer);
  const currentSupport = useSelector(store => store.supportReducer);
  const currentUnderstanding = useSelector(store => store.understandingReducer);



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <h5>Feeling: {currentFeeling}</h5>
        <h5>Understanding: {currentUnderstanding}</h5>
        <h5>Support: {currentSupport}</h5>
        <h5>Comments: {currentComments}</h5>
      </header>

      <HashRouter>
        <Route path = "/" exact>
          <Feeling />
        </Route>
        <Route path = "/feeling">
          <Feeling />
        </Route>
        <Route path = "/understanding">
          <Understanding />
        </Route>
        <Route path = "/support">
          <Support />
        </Route>
        <Route path = "/comments">
          <Comments />
        </Route>
        <Route path = "/review">
          <Review />
        </Route>
        <Route path = "/submitted">
          <Submitted />
        </Route>
        <Route path = "/admin">
          <Admin />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
