import React from 'react';
import { Link } from 'react-router-dom';
import { loadImage } from '../../helpers/heroImages';



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
            <img className="img" src={loadImage(`${id}.jpg`)} alt={superhero} />
         </Link>
      </div>
   )
}
