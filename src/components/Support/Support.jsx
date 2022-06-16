import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support() {

  const [support, setSupport] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeSupport = () => {
    setSupport(event.target.value);
  }

  const sendSupport = () => {
    console.log('in sendSupport');
    dispatch({type: 'SET_SUPPORT', payload: support});
    history.push('/comments');
  }

  return(
    <div>
      <h2>How well are you being supported?</h2>
      <input type="number" placeholder="Support?" onChange={changeSupport}/>
      <button onClick={sendSupport}>NEXT</button>
    </div>
  );
}

export default Support;