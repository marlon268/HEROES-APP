import React from 'react'
import { mount } from 'enzyme'
import { DashboardRoutes } from "../../routers/DashboardRoutes"
import { AuhContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router'

describe('Pruebas en el componente <DashboardRoutes/>', () => {

   const contextValue = {
      dispatch: jest.fn(),
      user: {
         logged: true,
         name: 'Juanito'
      }
   }



   test('Debe de mostrarse correctamente', () => {

      const wrapper = mount(
         <AuhContext.Provider value={contextValue}>
            <MemoryRouter>
               <DashboardRoutes />
            </MemoryRouter>
         </AuhContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')
   })


})
