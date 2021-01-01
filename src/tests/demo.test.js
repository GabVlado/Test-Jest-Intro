
describe('Pruebas en el arhivo demo.test.js', () => {
    test('debe ser iguales los strings  ', () => {

        //Inicializacion
        
        const mensaje = 'Hola Mundo';
    
        //Estimulo
        const mensaje2 = `Hola Mundo`;
    
        //Observaciones 
        expect(mensaje).toBe(mensaje2);
    
    
    })
})




