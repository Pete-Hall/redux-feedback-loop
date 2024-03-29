import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Understanding() {

  const [understanding, setUnderstanding] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUnderstanding = useSelector(store => store.understandingReducer);


  const changeUnderstanding = () => {
    setUnderstanding(event.target.value);
  }

  const sendUnderstanding = () => {
    console.log('in sendUnderstanding');
    if(understanding === '' && currentUnderstanding) {
      dispatch({type: 'SET_UNDERSTANDING', payload: currentUnderstanding});
      history.push('/support');
    }
    else if(understanding === '') {
      alert('Please input a valid score.');
    } else {
      dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
      history.push('/support');
    }
  }

  return(
    <div>
      <h2>How well are you understanding the content?</h2>
      <TextField type="number" defaultValue={currentUnderstanding} onChange={changeUnderstanding}/>
      <Button onClick={sendUnderstanding}>NEXT</Button>
      {
        currentUnderstanding ?
        <p> (You can click the next button to save your previously inputted answer or enter a new answer)</p>
        :
        <br/>
      }
    </div>
  );
}

export default Understanding;