import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Support() {

  const [support, setSupport] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const currentSupport = useSelector(store => store.supportReducer);

  const changeSupport = () => {
    setSupport(event.target.value);
  }

  const sendSupport = () => {
    console.log('in sendSupport');
    if(support === '' && currentSupport) {
      dispatch({type: 'SET_SUPPORT', payload: currentSupport});
      history.push('/comments');
    } else if(support === '') {
      alert('Please input a valid score.')
    } else {
      dispatch({type: 'SET_SUPPORT', payload: support});
      history.push('/comments');
    }
  }

  return(
    <div>
      <h2>How well are you being supported?</h2>
      <TextField type="number" defaultValue={currentSupport} onChange={changeSupport}/>
      <Button onClick={sendSupport}>NEXT</Button>
      {
        currentSupport ?
        <p> (You can click the next button to save your previously inputted answer or enter a new answer)</p>
        :
        <br/>
      }
    </div>
  );
}

export default Support;