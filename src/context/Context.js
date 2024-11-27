import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {
  const [details, setDetails] = useState({});
  const [images, setImages] = useState([]);
  const [loginLoading, setLoginLoading] = useState(true);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [taskId, setTaskId] = useState('');
  const [email, setEmail] = useState('');

    return (
        <Context.Provider
          value={{
            details,
            setDetails,
            images,
            setImages,
            loginLoading,
            setLoginLoading,
            name, 
            setName,
            date,
            setDate,
            taskId,
            setTaskId,
            email,
            setEmail
          }}
        >
          {children}
        </Context.Provider>
      );
};

export const useCustomContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useRideContext must be used within a RideProvider');
    }
    return context;
};