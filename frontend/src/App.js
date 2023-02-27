import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavRoutes from './routes/NavRoutes';
import NavBar from './routes/NavBar';
import { useEffect, useState } from 'react';
import data from './admin/data.json';


function App() {
  const [users, setUsers] = useState(data.data || {});

  function addUser(userData) {
    setUsers(users => ({ ...users, [`${Object.keys(users).length + 1}`]: userData }))
  }

  return (
    <div id="homepage">
      <h1>Yodlr Design Challenge</h1>
        <BrowserRouter>
          <NavBar />
          <NavRoutes addUser={addUser} data={users} />
        </BrowserRouter>
    </div>
  );
}

export default App;
