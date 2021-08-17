import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
   id,
   superhero,
   publisher,
}) => {
   return (
      <div className="container-child" >
         <Link to={`./hero/${id}`}>
            <h5 className="absolute superhero" >{superhero}</h5>
            <h5 className="absolute publisher" >{publisher}</h5>
            <img className="img" src={`./assets/heroes/${id}.jpg`} alt={superhero} />
         </Link>
      </div>
   )
}
