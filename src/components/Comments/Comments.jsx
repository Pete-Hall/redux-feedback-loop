import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Comments() {

  const [comments, setComments] = useState('');
  const dispatch = useDispatch();

  const changeComments = () => {
    setComments(event.target.value);
  }

  const sendComments = () => {
    console.log('in sendComments');
    dispatch({type: 'SET_COMMENTS', payload: comments});
  }

  return(
    <div>
      <h2>Any comments you want to leave?</h2>
      <input type="text" placeholder="Comments" onChange={changeComments}/>
      <button onClick={sendComments}>NEXT</button>
    </div>
  );
}

export default Comments;