// importar mount
import { mount } from '@vue/test-utils';
// importar mi componente
import App from '@/App.vue';
// importar jest functions
import {huevo, espinaca} from  "./jestTest";

const wrapper = mount(App);
const  vm = wrapper.vm;

// contenedor de los test
describe('Se probará la calidad de los productos', ()=>{
  // validar los datos del huevo
  test('Calidad del huevo', ()  => {
    //escriba aquí sus validaciones
    expect(huevo().estado[0]).toBe('fresco');
  });
  // validar los datos de la espinaca
  test('Calidad de la espinaca', ()  => {
    //escriba aquí sus validaciones
    expect(espinaca()).toEqual({
      estado: 1,
      color: "verde",
    });
  });
});
// validar clics
describe('Probar que se cambió la propiedad changeTest ', () => {
  test('should click a button', () => {
    const lastValue = wrapper.vm.changeTest
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.changeTest).toBe(lastValue+1)
  });
});