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

function App() {

  const currentFeeling = useSelector(store => store.feelingReducer);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <h5>Feeling: {currentFeeling}</h5>
        <h5>Understanding:</h5>
        <h5>Support:</h5>
        <h5>Comments:</h5>
      </header>

      <HashRouter>
        <Route path = "/" exact>
          <Feeling />
        </Route>
        <Route path = "/feeling" exact>
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
      </HashRouter>
    </div>
  );
}

export default App;
