import {useSelector} from 'react-redux';

function Review() {

  const currentComments = useSelector(store => store.commentsReducer);
  const currentFeeling = useSelector(store => store.feelingReducer);
  const currentSupport = useSelector(store => store.supportReducer);
  const currentUnderstanding = useSelector(store => store.understandingReducer);

  return(
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {currentFeeling}</p>
      <p>Understanding: {currentUnderstanding}</p>
      <p>Support: {currentSupport}</p>
      <p>Comments: {currentComments}</p>
      <button>SUBMIT</button>
    </div>
  );
}

export default Review;