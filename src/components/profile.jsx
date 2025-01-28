import React, { useContext } from 'react';
import Usercontext from '../context/usercontext';

const Profile = () => {
  const { user, setUser } = useContext(Usercontext);

  // Logout Functionality
  const handleLogout = () => {
    setUser(null); // Clear the user from context
  };

  if (!user) {
    return (
      <div className="p-6 max-w-md mx-auto text-center border rounded-lg bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <p className="text-gray-600">You are not logged in.</p>
        <p className="text-gray-500">Please log in to view your profile details.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {user.username}!</h2>
      <div className="text-gray-700 mb-4">
        <p>
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-semibold">Password:</span> {user.password}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
