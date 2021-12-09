import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas de 05-funciones.js', () => {
    test('Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest)
    });
    test('Debe de retornar un objeto con username: Pablo', () => {
        const nombre = 'Pablo'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    });
})
