import PrimeraApp from "../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";

describe("PrimeraApp test", () => {
  /* test('Deberia mostrar "Hola soy pablo"', () => {
    const msg = "Hola soy pablo";
    const { getByText } = render(<PrimeraApp saludo="Hola soy pablo" />);
    expect(getByText(msg)).toBeInTheDocument();
    //utilizando esa importación
    import '@testing-library/jest-dom';
  }); */

  test("Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo mostrado por props", () => {
    const saludo = "Hola";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp 
        saludo={saludo}
        subtitulo={subtitulo}
      />);
    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
