import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review() {

  const history = useHistory();

  const currentComments = useSelector(store => store.commentsReducer);
  const currentFeeling = useSelector(store => store.feelingReducer);
  const currentSupport = useSelector(store => store.supportReducer);
  const currentUnderstanding = useSelector(store => store.understandingReducer);

  const editComments = () => {
    history.push('/comments');
  }

  const editFeelings = () => {
    history.push('/feeling');
  }

  const editSupport = () => {
    history.push('/support');
  }

  const editUnderstanding = () => {
    history.push('/understanding');
  }

  const submitFeedback = () => {
    console.log('in submitFeedback');
    let newFeedback = {
      feeling: currentFeeling,
      understanding: currentUnderstanding,
      support: currentSupport,
      comments: currentComments
    };
    axios.post('/feedback', newFeedback).then((response) => {
      console.log(response.data);
      history.push('/submitted');
    }).catch((err) => {
      console.log(err);
      alert('error adding feedback');
    })
  }

  return(
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {currentFeeling} <button onClick={editFeelings}>Edit</button></p>
      <p>Understanding: {currentUnderstanding} <button onClick={editUnderstanding}>Edit</button></p>
      <p>Support: {currentSupport} <button onClick={editSupport}>Edit</button></p>
      <p>Comments: {currentComments} <button onClick={editComments}>Edit</button></p>
      <button onClick={submitFeedback}>SUBMIT</button>
    </div>
  );
}

export default Review;