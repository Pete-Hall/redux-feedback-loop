import {useState} from 'react';

function Feeling(props) {
  // template hook
  const [hook, setHook] = useState(null);

  const handleHook = () => {
    setHook(event.target.value);
  }

  return(
    <div>
      <h2>Feeling</h2>
      <p><button onClick={handleHook}>Click</button> Clicks: {hook}</p>
      <p>Props: {JSON.stringify(props)}</p>
    </div>
  );
}

export default Feeling;