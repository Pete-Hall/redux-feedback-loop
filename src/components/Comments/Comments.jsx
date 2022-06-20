import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Comments() {

  const [comments, setComments] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const currentComments = useSelector(store => store.commentsReducer);


  const changeComments = () => {
    setComments(event.target.value);
  }

  const sendComments = () => {
    console.log('in sendComments');
    if(comments === '' && currentComments) {
      dispatch({type: 'SET_COMMENTS', payload: currentComments});
      history.push('/review');
    } else {
      dispatch({type: 'SET_COMMENTS', payload: comments});
      history.push('/review');
    }
  }

  return(
    <div>
      <h2>Any comments you want to leave?</h2>
      <TextField type="text" placeholder={currentComments} onChange={changeComments}/>
      <Button onClick={sendComments}>NEXT</Button>
      {
        currentComments ?
        <p> (You can click the next button to save your previously inputted answer or enter a new answer)</p>
        :
        <br/>
      }
    </div>
  );
}

export default Comments;