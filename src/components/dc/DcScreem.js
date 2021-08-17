import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcScreem = () => {

   const publisher = 'DC Comics'

   return (
      <div>
         <h1>DC Screen</h1>
         <hr />
         <HeroeList publisher={publisher} />
      </div>
   )
}
