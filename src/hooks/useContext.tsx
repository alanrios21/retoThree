import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
  fetchData: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>('');

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

// Hook personalizado para acceder al contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
