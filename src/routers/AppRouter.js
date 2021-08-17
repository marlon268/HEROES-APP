import React, { useContext } from 'react'
import {
   BrowserRouter as Router,
   Switch,
} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuhContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

   const { user: { logged } } = useContext(AuhContext)

   return (
      <Router>
         <div>

            <Switch>
               <PublicRoute
                  path="/login"
                  component={LoginScreen}
                  isAuthenticated={logged}
               />

               <PrivateRoute
                  path="/"
                  component={DashboardRoutes}
                  isAuthenticated={logged}
               />
            </Switch>

         </div>
      </Router>
   )
}
