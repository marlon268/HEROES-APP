import React, { useMemo } from 'react'
import queryString from "query-string";

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

   // npm install query-string; lo instalamos para obtener mas facilmente la query

   const location = useLocation();

   const { q = "" } = queryString.parse(location.search)


   const [valuesForm, handleInputChange] = useForm({
      searchText: q
   })

   const { searchText } = valuesForm;

   const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

   const handleSearch = (e) => {

      e.preventDefault()

      history.push(`?q=${searchText}`)
   }

   return (
      <div>
         <h1>Search</h1>
         <hr />

         <div>
            <div>
               <h4> Search Form </h4>
               <hr />
               <form onSubmit={handleSearch}>
                  <input
                     autoComplete="off"
                     name="searchText"
                     type="text"
                     placeholder="Find your hero"
                     className="form-control"
                     value={searchText}
                     onChange={handleInputChange}
                  />

                  <button
                     type="submit"
                     className="brn m-1"
                  >
                     Search...
                  </button>
               </form>
               <h4>Results</h4>
               <hr /></div>
            <div className="container1">

               {heroesFiltered.length < 1 ? <h1 className="text-danger">Heroe no existe</h1> :
                  heroesFiltered.map((hero) => (
                     <HeroCard
                        key={hero.id}
                        {...hero}
                     />
                  ))
               }
            </div>
         </div>
      </div>
   )
}
