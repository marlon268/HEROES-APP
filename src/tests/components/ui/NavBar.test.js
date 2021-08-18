import { NavBar } from "../../../components/ui/NavBar"
import { mount } from 'enzyme'
import { AuhContext } from "../../../auth/AuthContext"
import { MemoryRouter, Router } from "react-router-dom"
import { types } from "../../../types/types"

describe('Pruebas en <NavBar />', () => {

   const historyMock = {
      push: jest.fn(),
      replace: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
   }

   const contextValue = {
      dispatch: jest.fn(),
      user: {
         logged: true,
         name: 'Marlon'
      }
   };

   const wrapper = mount(
      <AuhContext.Provider value={contextValue}>
         <MemoryRouter>
            <Router history={historyMock}>
               <NavBar />
            </Router>
         </MemoryRouter>
      </AuhContext.Provider>
   );

   afterEach(() => {
      jest.clearAllMocks();
   });

   test('Debe de mostrarse correctamente', () => {

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.text-info').text().trim()).toBe('Marlon')

   });

   test('Debe de llamar el logout y usar el history', () => {

      wrapper.find('button').prop('onClick')();

      expect(contextValue.dispatch).toHaveBeenCalledWith({
         type: types.logout
      });

      expect(historyMock.replace).toHaveBeenCalledWith('/login')

   });



})
