import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Submitted() {

  const dispatch = useDispatch();
  const history = useHistory();

  const restartFeedback = () => {
    console.log('in restartFeedback');
    dispatch({type: 'SET_RESTART', payload: ''});
    // dispatch({type: 'RESET_SCORES', payload: ''}); // TRYING TO UNDERSTAND THE ROOT REDUCER
    history.push('/feeling');
  }

  return(
    <div>
      <h2>Thank you!</h2>
      <img src="../images/goat_small.jpg"/>
      <p>The goat of feedback is pleased.</p>
      <button onClick={restartFeedback}>Leave New Feedback</button>
    </div>
  );
}

export default Submitted;