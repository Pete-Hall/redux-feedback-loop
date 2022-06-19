import axios from 'axios';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

  const flagFeedback = () => {
    console.log('in flagFeedback:', props.myFeedback.id);
    axios.put(`/feedback/flag/${props.myFeedback.id}`).then((response) => {
      console.log(response);
      props.getFeedback();
    }).catch((err) => {
      console.log(err);
      alert('error flagging feedback');
    })
  }
  
  return( 
    <tr>
      <td>{props.myFeedback.feeling}</td>
      <td>{props.myFeedback.understanding}</td>
      <td>{props.myFeedback.support}</td>
      <td>{props.myFeedback.comments}</td>
      <td><DeleteForeverIcon onClick={deleteFeedback} /></td>
      <td>
        {
          props.myFeedback.flagged ?
          <FlagIcon onClick={flagFeedback} />
          :
          <FlagOutlinedIcon onClick={flagFeedback} />
        }
      </td>
    </tr>
  );
}

export default AdminFeedback;