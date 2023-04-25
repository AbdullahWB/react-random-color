import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({email: "a"})
    const [loading, setLoading] = useState(true)

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, }}>
          {children}
        </AuthContext.Provider>
      );
};

export default AuthProvider;