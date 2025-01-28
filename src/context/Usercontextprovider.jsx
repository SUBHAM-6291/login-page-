import React, { useState } from 'react';
import Usercontext from './usercontext';

const Usercontextprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
};

export default Usercontextprovider;
