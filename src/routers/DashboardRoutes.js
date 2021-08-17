import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreem } from '../components/dc/DcScreem'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

import "../styles/DashboardRoutes.css"

export const DashboardRoutes = () => {
   return (
      <>

         <NavBar />
         <div className="container-all">
            <Switch>
               <Route exact path="/marvel" component={MarvelScreen} />
               <Route exact path="/hero/:heroeId" component={HeroeScreen} />
               <Route exact path="/dc" component={DcScreem} />
               <Route exact path="/search" component={SearchScreen} />

               <Redirect to="/marvel" />
            </Switch>

         </div>
      </>
   )
}
