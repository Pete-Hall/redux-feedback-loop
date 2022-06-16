import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Understanding(props) {

  const [understanding, setUnderstanding] = useState(0);
  const dispatch = useDispatch();

  const changeUnderstanding = () => {
    setUnderstanding(event.target.value);
  }

  const sendUnderstanding = () => {
    console.log('in sendUnderstanding');
    dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
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