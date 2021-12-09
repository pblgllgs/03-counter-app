describe("Pruebas en el archivo demo.test.js", () => {
  test("Debe de ser iguales", () => {
    //arrange
    const msg = "Hola mundo";
    //Act
    const msg2 = `Hola mundo`;
    //assert
    expect(msg).toBe(msg2);
  });
});
