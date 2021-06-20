import { useEffect, useState } from 'react';
import api from './services/api';

import User from './components/User';

import logo from './logo.svg';
import './App.css';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        {users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </header>
    </div>
  );
}

export default App;
