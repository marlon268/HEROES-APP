import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import '../../styles/HeroeList.css'

export const HeroeList = ({ publisher }) => {

   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])


   return (
      <div className="container1 animate__animated animate__fadeIn">
         {heroes.map(hero => (
            <HeroCard
               key={hero.id}
               {...hero} >
            </HeroCard>
         ))}
      </div>
   )
};
