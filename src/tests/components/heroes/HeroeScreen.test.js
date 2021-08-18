import React from 'react';
import { mount } from 'enzyme'
import { HeroeScreen } from '../../../components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en el componente <HeroeScreen />', () => {

   const history = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
   }


   test('Debe de mostrar el componente redirect si no hay argumentos en la URL', () => {

      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero']} >
            <HeroeScreen history={history} />
         </MemoryRouter>

      );

      expect(wrapper.find('Redirect').exists()).toBe(true)

   })

   test('Debe de mostrar un hero si el parámetro existe y se encuentra', () => {

      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider']} >
            <Route path="/hero/:heroeId" component={HeroeScreen} />
         </MemoryRouter>
      );

      expect(wrapper.find('.container-card').exists()).toBe(true);

   });

   test('Debe de regresar a la pantalla anterios con push', () => {

      const history = {
         length: 1,
         push: jest.fn(),
         goBack: jest.fn(),
      }

      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider']} >
            <Route
               path="/hero/:heroeId"
               component={() => <HeroeScreen history={history} />}
            />
         </MemoryRouter>
      );

      wrapper.find('button').prop('onClick')();

      expect(history.push).toHaveBeenCalledWith('/')
      expect(history.goBack).not.toHaveBeenCalled()

   });

   test('Debe de regresar a la pantalla anterior goBack', () => {

      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider']} >
            <Route
               path="/hero/:heroeId"
               component={() => <HeroeScreen history={history} />}
            />
         </MemoryRouter>
      );

      wrapper.find('button').prop('onClick')();

      expect(history.goBack).toHaveBeenCalled()
      expect(history.push).toHaveBeenCalledTimes(0)

   });

   test('Debe de llamar el redirect si el hero no existe', () => {

      const wrapper = mount(
         <MemoryRouter initialEntries={['/hero/marvel-spider12323']} >
            <Route
               path="/hero/:heroeId"
               component={() => <HeroeScreen history={history} />}
            />
         </MemoryRouter>
      );

      expect(wrapper.text()).toBe('')

   })






})
