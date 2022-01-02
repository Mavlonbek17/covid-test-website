import { useEffect, useState } from 'react';
import './All.css';
import http from './services/axios';
import UsersList from './components/UsersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInform from './components/UserInform';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    http.get("icode/client/")
      .then(response => {
        setPatients(response.data);
      })
      .catch(err => alert(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<UsersList patients={patients} setPatients={setPatients} />} />
          {patients.map(patient => {
            return (
              <Route key={patient.id} path={'/patient/:id'} element={<UserInform patients={patients} gener={patient.gener} />} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
