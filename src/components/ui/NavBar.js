import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuhContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const NavBar = () => {

   const { user: { name }, dispatch } = useContext(AuhContext);
   const history = useHistory();

   const handleLogout = () => {

      history.replace('/login')

      const action = {
         type: types.logout,
      }

      dispatch(action)

   }

   return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

         <div className="navbar-collapse">
            <div className="navbar-nav">

               <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/marvel"
               >
                  Marvel
               </NavLink>

               <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/dc"
               >
                  DC
               </NavLink>

               <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/search"
               >
                  Search
               </NavLink>
            </div>
         </div>

         <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">

               <span className="nav-item nav-link text-info">
                  {name}
               </span>

               <button
                  className="nav-item nav-link btn"
                  onClick={handleLogout}
               >
                  Logout
               </button>
            </ul>
         </div>
      </nav>
   )
}