import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', () => {
    test(' getSaludo debe de retornar hola + nombre ', () => {
        const nombre = 'Fernando'

        const saludo = getSaludo( nombre );

        expect(saludo).toBe(  'Hola ' + nombre)
    })

    //getSaludo  debe de retornar Hola Gabriel si no hay argumento en el nombre

    test('Prueba en caso default del nombre ', () => {
        

        const saludo = getSaludo( )
        expect(saludo).toBe( 'Hola Gabriel')

    })
    
    
})
