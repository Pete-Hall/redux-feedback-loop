import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Feeling() {

  const [feeling, setFeeling] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const currentFeeling = useSelector(store => store.feelingReducer);

  const changeFeeling = () => {
    // console.log(event.target.value);
    setFeeling(event.target.value);
  }

  const sendFeeling = () => {
    console.log('in sendFeeling');
    if(feeling === '' && currentFeeling) { // this conditional is used to send the currentFeeling in the reducer back to the reducer. used if user wants to go back and edit answer. I couldn't figure out how to pre-fill the reducer data and have that input form still be editable
      dispatch({type: 'SET_FEELING', payload: currentFeeling});
      history.push('/understanding');
    } else if(feeling === '') {
      alert('Please input a valid score.');
    } else {
      dispatch({type: 'SET_FEELING', payload: feeling});
      history.push('/understanding');
    }
  }

  return(
    <div>
      <h2>How are you feeling today?</h2>
      <TextField type="number" placeholder={currentFeeling} onChange={changeFeeling}/>
      <Button onClick={sendFeeling}>NEXT</Button>
      {
        currentFeeling ?
        <p> (You can click the next button to save your previously inputted answer or enter a new answer)</p>
        :
        <br/>
      }
    </div>
  );
}

export default Feeling;