

function AdminFeedback(props) {
  
  return( 
    <tr>
      <td>{props.myFeedback.feeling}</td>
      <td>{props.myFeedback.understanding}</td>
      <td>{props.myFeedback.support}</td>
      <td>{props.myFeedback.comments}</td>
      <td></td>
    </tr>
  );
}

export default AdminFeedback;