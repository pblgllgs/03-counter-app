import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruevas en 02-template-base.js', () => {
    test('getSaludo debe retornar "Hola pablo"', () => {
        const nombre = 'pablo';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre + '!')
    });

    test('getSaludo debe retornar "Hola Carlos!" si no hay argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!')
    });
})
