import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Submitted() {

  const dispatch = useDispatch();
  const history = useHistory();

  const restartFeedback = () => {
    console.log('in restartFeedback');
    dispatch({type: 'SET_RESTART', payload: null});
    history.push('/feeling');
  }

  return(
    <div>
      <h2>Thank you!</h2>
      <button onClick={restartFeedback}>Leave New Feedback</button>
    </div>
  );
}

export default Submitted;