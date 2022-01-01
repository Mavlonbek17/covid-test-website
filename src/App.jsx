// import { useEffect, useState } from 'react';
import './All.css';
// import http from './services/axios';
import UsersList from './components/UsersList';

function App() {
  // const [patients, setPatients] = useState([]);

  // useEffect(() => {
  //   http.get("icode/client/")
  //     .then(response => {
  //       setPatients(response.data);
  //     })
  //     .catch(err => alert(err));
  // }, []);

  return (
    <div>
      <UsersList
        // patients={patients} setPatients={setPatients}
      />
    </div>
  );
}

export default App;
