import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review() {

  const history = useHistory();

  const currentComments = useSelector(store => store.commentsReducer);
  const currentFeeling = useSelector(store => store.feelingReducer);
  const currentSupport = useSelector(store => store.supportReducer);
  const currentUnderstanding = useSelector(store => store.understandingReducer);

  const submitFeedback = () => {
    console.log('in submitFeedback');
    let newFeedback = {
      feeling: currentFeeling,
      understanding: currentUnderstanding,
      support: currentSupport,
      comments: currentComments
    };
    // axios post  here
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
      <p>Feelings: {currentFeeling}</p>
      <p>Understanding: {currentUnderstanding}</p>
      <p>Support: {currentSupport}</p>
      <p>Comments: {currentComments}</p>
      <button onClick={submitFeedback}>SUBMIT</button>
    </div>
  );
}

export default Review;