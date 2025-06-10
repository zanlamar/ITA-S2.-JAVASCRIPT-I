// 1.2 TERNARY OPERATOR

/* NIVEL 1

    EJ 1: BASIC TERNARY OPERATOR
    Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

    const canDrive = (age) => {
        age >= 18? console.log(`YES, you can drive`): console.log(`NOPE, you can't drive`);
    }

    canDrive(30);
    canDrive(12);


    /* EJ 2: COMPARATION OPERATORS
    Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. */

    const checkHigher = (num1, num2) => {
        num1 > num2? console.log(`${num1} is higher`):console.log(`${num2} is higher`);
    }

    checkHigher(92, 88);
    checkHigher(33, 36);


/* NIVEL 2

    EJ 3: LINKED USE OF TERNARY OPERATORS
    Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.*/
    
    const checkPositive = (number) => { 
        number > 0 ? console.log(`${number} is positive`)
        : number < 0 ? console.log(`${number} is negative`)
        : console.log (`${number} is zero`);
    };

    checkPositive(92);
    checkPositive(-5);
    checkPositive(0);
    
    
    /* EJ 3b: TERNARIO CON FUNCIONES
    Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim. */

    const findTop = (a, b, c) => {
        (a > b && a > c) ? console.log(`${a} is the top number`)
        : (b > a && b > c) ? console.log(`${b} is the top number`)
        : console.log(`${c} is the top number`); 
    };

    findTop(112, 91, 941);



/* NIVEL 3
    
    EJ 4: TERNARY IN A LOOP
    Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell. */

   const array2 = [4, 19, 21, 24, 77, 103];

   const parOImpar = (array) => {
        for (let i = 0; i < array.length; i++) {
            (array[i]%2 === 0)? console.log(`${array[i]} is even`): console.log(`${array[i]} is odd`);
        };
    }

   parOImpar(array2);


   
