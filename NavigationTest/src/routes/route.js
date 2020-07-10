/* eslint-disable prettier/prettier */
import React, {useState, createContext} from 'react'
import Login from '../screens/Login'
import MainRoute from './mainRoute'

export const LoginContext = createContext({});

const Routes = () => {

  const [login, setLogin] = useState(null);

  const renderRoutes = () => {
    if(!login) return <Login/>
    return <MainRoute/>
  };

  return (
      <LoginContext.Provider value={{login, setLogin}}>
        {
          renderRoutes()
        }
      </LoginContext.Provider>
    );
};

export default Routes;