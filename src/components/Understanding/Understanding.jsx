import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

  const [understanding, setUnderstanding] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeUnderstanding = () => {
    setUnderstanding(event.target.value);
  }

  const sendUnderstanding = () => {
    console.log('in sendUnderstanding');
    if(understanding === null) {
      alert('Please input a valid score.');
    } else {
      dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
      history.push('/support');
    }
  }

  return(
    <div>
      <h2>How well are you understanding the content?</h2>
      <input type="number" placeholder="Understanding?" onChange={changeUnderstanding}/>
      <button onClick={sendUnderstanding}>NEXT</button>
    </div>
  );
}

export default Understanding;