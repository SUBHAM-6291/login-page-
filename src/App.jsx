import React from 'react';
import UsercontextProvider from './context/Usercontextprovider';
import Login from './components/Login';
import Profile from './components/profile';

const App = () => {
  return (
    <UsercontextProvider>
      <div className="app-container">
        <h1 className="text-center text-2xl font-bold mb-4">Welcome to Coffee with Subham</h1>
        
        <Login />
        <Profile />
      </div>
    </UsercontextProvider>
  );
};

export default App;
