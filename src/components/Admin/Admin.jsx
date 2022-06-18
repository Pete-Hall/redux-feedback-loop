import axios from 'axios';
import {useEffect, useState} from 'react';

function Admin() {

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedback();
  }), []; // do I need a dependecy beside run once on page load?

  const getFeedback = () => {
    console.log('in getFeedback (for admin)');
    axios.get('/feedback').then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
      alert('error getting feedback');
    })
  }


  return(
    <div>
      <h2>Admin</h2>

    </div>
  );
}

export default Admin;