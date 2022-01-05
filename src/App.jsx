import { useEffect, useState } from 'react';
import './All.css';
import http from './services/axios';
import UsersList from './components/UsersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInform from './components/UserInform';
import AdminLogin from './components/AdminLogin';

function App() {
  const [patients, setPatients] = useState([]);
  const [auth, setAuth] = useState(false);

  const AdminAuth = (name, pass) => {
    if (name === "WorldMedicalAdmin" && pass === "worldmedical2020") {
      setAuth(true);
    } else {
      alert("Бундай фойдаланувчи мавжуд эмас!")
    }
  }

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
          {auth
            ? <Route path='/' element={<UsersList patients={patients} setPatients={setPatients} />} />
            : <Route path="/" element={<AdminLogin AdminAuth={AdminAuth} />} />}
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
