import axios from 'axios';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagIcon from '@mui/icons-material/Flag';

function AdminFeedback(props) {

  const deleteFeedback = () => {
    console.log('in deleteFeedback:', props.myFeedback.id);
    if(confirm('Are you sure you want to delete this feedback? This action cannot be undone.')) {
      axios.delete(`/feedback/delete/${props.myFeedback.id}`).then((response) => {
        console.log(response);
        alert('Delete successful.');
        props.getFeedback();
      }).catch((err) => {
        console.log(err);
        alert('error deleting feedback');
      })
    }
    else {
      alert('You have not deleted that feedback');
    }
  }

  
  // npm install @mui/icons-material
  // import flag filled and flag outlined
  // ternary for value of flagged. true - show flag filled. false - show flag outlined. on click of icon, function that reverses boolean in db for flagged.
  
  return( 
    <tr>
      <td>{props.myFeedback.feeling}</td>
      <td>{props.myFeedback.understanding}</td>
      <td>{props.myFeedback.support}</td>
      <td>{props.myFeedback.comments}</td>
      <td><button onClick={deleteFeedback}>Delete</button></td>
      {/* <td>{JSON.stringify(props.myFeedback.flagged)}</td> */}
      <td><FlagOutlinedIcon /></td>
    </tr>
  );
}

export default AdminFeedback;