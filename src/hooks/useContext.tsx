import  { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setUsername(data[data.length - 1].nombre);
      } else {
        console.error('No users found in the response');
      }
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, fetchData }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);
