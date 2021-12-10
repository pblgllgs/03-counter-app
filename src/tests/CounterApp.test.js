import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp /> correctamente", () => {
    const value = 10;
    const wrapper = shallow(<CounterApp value={value} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counter = wrapper.find("h2").props().children;
    expect(counter).toBe(value);
  });
  test("Debe mostrar el valor por defecto de 100, 2", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text();
    expect(counterText).toBe("100");
  });

  test("Debe de incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(counterText).toBe("11");
  });

  test("Debe de decrementar con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(counterText).toBe("9");
  });

  test("Debe de dar reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    //boton +1
    wrapper.find("button").at(0).simulate("click");
    //boton +1
    wrapper.find("button").at(0).simulate("click");
    //boton reset
    wrapper.find("button").at(1).simulate("click");
    //referencial h2 con el valor
    const counterText = wrapper.find("h2").text();
    //assert del valor del h2 con el esperado que es el default dado por props
    expect(counterText).toBe("105");
  });
});
