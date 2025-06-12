// 1.4  REST & SPREAD OPERATORS
console.log('  ---------- 1.4 REST & SPREAD OPERATORS  ----------');


/* NIVEL 1

    EJ 1: SPREAD OPERATOR IN ARRAYS
    Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. */

    const arrayA = [4, 8, 15, 16, 23, 42];
    const arrayB = [14, 28, 35, 46, 53, 62];

    const arrayC = [...arrayA, ...arrayB];
    console.log(arrayC);



/*  EJ 2: REAST OPERATOR IN FUNCTIONS
    Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma. */

    const suma = (...numbers) => {
        let total = 0;
        numbers.forEach(element => total += element);
        return total;
    };

    const numbers = [4, 8, 15, 16, 23, 42];
    console.log(suma(...numbers));


/*  NIVEL 2

    EJ 3: COPY OBJECTS WITH SPREAD
    Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat. */

    const objecte1 = {
        name: 'Limón',
        price: 1,
        km0: true
    };

    const objecte2 = {...objecte1};
    objecte2.name = 'Papaya';
    objecte2.price = 4;
    objecte2.km0 = false;

    console.log(objecte1);
    console.log(objecte2);



   /* EJ 4: REST IN DESTRUCTURING
    Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable. */

    const arrayVariado = [ 1, 'a', null, 'Paco', [3, 4, 5]];
    const [a, b, ...rest] = arrayVariado;

    console.log(a);
    console.log(b);
    console.log(rest);


/* NIVEL 3

    EJ 5: SPREAD IN FUNCTIONS
    Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.*/

    const functionSpread = (x, y, z) => x + y - z;

    const lista = [100, 50, 1];

    functionSpread(...lista);
    console.log(functionSpread(...lista));



    /* EJ 6: FUSION OBJECT WITH SPREAD
    Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou. */

    const notas = {
        salida: ['Cítrico', 'Floral'],
        corazón: ['Vainilla', 'Praliné'],
        base: ['Cuero', 'Cereza']
    };

    const logistica = {
        marca: 'Byredo',
        tipo: 'EDT',
        precio: 150,
    };

    const perfume = {...notas, ...logistica}
    console.log(perfume);

    
