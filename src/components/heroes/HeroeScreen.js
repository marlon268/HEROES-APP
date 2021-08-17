import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroById';

import "../../styles/HeroScreen.css"

export const HeroeScreen = ({ history }) => {

   // Extrae los parametros enviados por url
   const { heroeId } = useParams();

   const hero = useMemo(() => getHeroeById(heroeId), [heroeId])

   if (!hero) {
      return <Redirect to="/" />
   }

   const handleReturn = () => {

      if (history.length <= 2) {
         history.push('/')
      } else {
         history.goBack()
      }

   }

   const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

   return (
      <article className="container-card">
         <div className="container-card__img">
            <img
               src={`../assets/heroes/${heroeId}.jpg`}
               alt={superhero} />
         </div>

         <div className="container-card__text">
            <div>
               <h1>{superhero}</h1>
               <h2>{publisher}</h2>
               <h2>{alter_ego}</h2>
               <h2>{first_appearance}</h2>
               {(characters !== alter_ego) && <h2>{characters}
               </h2>}
            </div>

            <button
               className="button-return"
               onClick={handleReturn}
            >
               Return
            </button>
         </div>

      </article>
   )
}
