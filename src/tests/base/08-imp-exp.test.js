import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
    test('Deberia devolver un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const dataHeroe = heroes.find((h) => (h.id === id));
        expect(heroe).toEqual(dataHeroe);
    })

    test('Deberia undefined si el id no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(undefined);
    })

    test("Deberia devolver los heroes de DC", () => {
        const owner = 'DC'
        const heroesDC = heroes.filter((h) => (h.owner === owner));
        const heroesResp = getHeroesByOwner(owner);
        expect(heroesResp).toEqual(heroesDC);
    });

    test("Deberia devolver los heroes de Marvel", () => {
        const owner = 'Marvel'
        const heroesMarvel = heroes.filter((h) => (h.owner === owner));
        const heroesResp = getHeroesByOwner(owner);
        expect(heroesResp).toEqual(heroesMarvel);
        expect( heroesResp.length ).toBe(2);
    });

    test("Deberia devolver un arreglo vacio", () => {
        const owner = 'test'
        const heroesResp = getHeroesByOwner(owner);
        expect(heroesResp).toEqual([]);
    });
});
