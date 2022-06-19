import axios from 'axios';
import {useEffect, useState} from 'react';
import AdminFeedback from '../AdminFeedback/AdminFeedback';
import './Admin.css';

function Admin() {

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
    <table>
      <thead>
        <tr>
          <th>Feeling</th>
          <th>Comprehension</th>
          <th>Support</th>
          <th>Comments</th>
          <th>Delete</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {
        feedbacks.map((feedback, index) => (
          <AdminFeedback key = {index} myFeedback = {feedback} getFeedback = {getFeedback}/>
          ))
        }
      </tbody>
    </table>
  );
}

export default Admin;