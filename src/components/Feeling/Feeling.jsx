import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling() {

  const [feeling, setFeeling] = useState(0);
  const dispatch = useDispatch();

  const changeFeeling = () => {
    // console.log(event.target.value);
    setFeeling(event.target.value);
  }

  const sendFeeling = () => {
    console.log('in sendFeeling');
    dispatch({type: 'SET_FEELING', payload: feeling});
  }

  return(
    <div>
      <h2>How are you feeling today?</h2>
      <input type="number" placeholder="Feeling?" onChange={changeFeeling}/>
      <button onClick={sendFeeling}>NEXT</button>
    </div>
  );
}

export default Feeling;