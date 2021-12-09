import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con 09-promesas", () => {
  test("Debe retornar un heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes.find((heroe) => heroe.id === id));
      done();
    });
  });

  test("Debe retornar un erro si el heroe no existe", (done) => {
    const id = 10;
    // eslint-disable-next-line jest/valid-expect-in-promise
    getHeroeByIdAsync(id).catch((err) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
