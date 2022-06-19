import axios from 'axios';

function AdminFeedback(props) {

  const deleteFeedback = () => {
    console.log('in deleteFeedback:', props.myFeedback.id);
    axios.delete(`/feedback/delete/${props.myFeedback.id}`).then((response) => {
      console.log(response);
      props.getFeedback();
    }).catch((err) => {
      console.log(err);
      alert('error deleting feedback');
    })
  }
  
  return( 
    <tr>
      <td>{props.myFeedback.feeling}</td>
      <td>{props.myFeedback.understanding}</td>
      <td>{props.myFeedback.support}</td>
      <td>{props.myFeedback.comments}</td>
      <td><button onClick={deleteFeedback}>Delete</button></td>
    </tr>
  );
}

export default AdminFeedback;