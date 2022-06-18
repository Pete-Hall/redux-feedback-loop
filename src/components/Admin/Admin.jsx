import axios from 'axios';
import {useEffect, useState} from 'react';
import AdminFeedback from '../AdminFeedback/AdminFeedback';

function Admin(props) {

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    console.log('in getFeedback (for admin)');
    axios.get('/feedback').then((response) => {
      console.log(response.data);
      setFeedbacks(response.data);
    }).catch((err) => {
      console.log(err);
      alert('error getting feedback');
    })
  }

  return(
    <div>
      <h2>Admin</h2>
      {
        feedbacks.map(feedback => (
          <AdminFeedback myFeedback = {feedback}/>
        ))
      }
    </div>
  );
}

export default Admin;