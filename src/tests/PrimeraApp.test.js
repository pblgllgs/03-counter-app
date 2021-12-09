import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';


describe('PrimeraApp test', () => {
    test('Deberia mostrar "Hola soy pablo"', () => {
        const msg = 'Hola soy pablo';
        const {getByText} = render(<PrimeraApp saludo="Hola soy pablo"/>);
        expect(getByText(msg)).toBeInTheDocument();
    })
    
})
