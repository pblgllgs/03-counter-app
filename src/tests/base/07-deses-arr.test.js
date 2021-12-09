import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas en desetructuracion", () => {
  test("Deberia devolver un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
