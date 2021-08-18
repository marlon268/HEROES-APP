import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'
import { AuhContext } from '../../auth/AuthContext'

describe('Pruebas en <AppRouter />', () => {


   test('Debe de mostrar el login si no esta autenticado ', () => {

      const contextValue = {
         dispatch: jest.fn(),
         user: {
            logged: false
         }
      }

      const wrapper = mount(
         <AuhContext.Provider value={contextValue}>
            <AppRouter />
         </AuhContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();

   })

   test('Debe de mostrar el componente de marvel si está autenticado', () => {

      const contextValue = {
         dispatch: jest.fn(),
         user: {
            logged: true,
            name: 'Juan'
         }
      }

      const wrapper = mount(
         <AuhContext.Provider value={contextValue}>
            <AppRouter />
         </AuhContext.Provider>
      );

      expect(wrapper.find('.navbar').exists()).toBe(true);


   })



})
