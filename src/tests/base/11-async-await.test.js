import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas con 11-async-await", () => {
  test("Deveria retornar la url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
