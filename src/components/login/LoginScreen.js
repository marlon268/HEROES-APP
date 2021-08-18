import React, { useContext } from 'react';
import { AuhContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

   const { dispatch } = useContext(AuhContext)

   const handleLogin = () => {

      const lastPath = localStorage.getItem('lastPath') || '/';

      const action = {
         type: types.login,
         payload: {
            name: "Marlon"
         }
      };

      dispatch(action);

      history.replace(lastPath);

   }

   return (
      <div className="container mt-5">
         <h1>Login</h1>
         <hr />

         <button className="btn btn-primary" onClick={handleLogin} >Login</button>

      </div>
   )
}
