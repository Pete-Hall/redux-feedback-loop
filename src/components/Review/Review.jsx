import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Button from '@mui/material/Button';

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
      <p>Feelings: {currentFeeling} <Button color="secondary" onClick={editFeelings}>Edit</Button></p>
      <p>Understanding: {currentUnderstanding} <Button color="secondary" onClick={editUnderstanding}>Edit</Button></p>
      <p>Support: {currentSupport} <Button color="secondary" onClick={editSupport}>Edit</Button></p>
      <p>Comments: {currentComments} <Button color="secondary" onClick={editComments}>Edit</Button></p>
      <Button onClick={submitFeedback}>SUBMIT</Button>
    </div>
  );
}

export default Review;