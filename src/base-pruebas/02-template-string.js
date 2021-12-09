
const nombre = 'pablo';
const apellido = 'gallegos';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}