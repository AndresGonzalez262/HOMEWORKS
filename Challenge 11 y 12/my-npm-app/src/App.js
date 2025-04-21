import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from './components/Login';
import { Logout } from './components/Logout';

function App() {
  const { status } = useSelector(state => state.auth);

  return (
    <div>
      {status === 'authenticated' ? <Logout /> : <Login />}

      <Crud />

    </div>
  );
}

export default App;