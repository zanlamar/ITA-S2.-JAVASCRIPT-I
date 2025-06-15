// 1.3 CALLBACKS
console.log(' ---------- 1.3 CALLBACKS  ----------')


/* NIVEL 1

    EJ 1: BASIC CALLBACK
    Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre. */

    const process = (name, callback) => {
        callback(nombre);
    };



    /* EJ 2: CALLBACK WITH MATHS
    Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres. */

    const calculator = (num1, num2, callbackNums) => callbackNums(num1, num2);
    const callbackNums = (num1, num2) => num1 + num2;

    console.log(calculator(8, 3, callbackNums));

 /* NIVEL 2
 
    EJ 3: ASYNCHRONOUS CALLBACKS
    Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre. */

    const waitAndGreet = (name, callbackHi) => {
        setTimeout(() => {
            callbackHi(name);
        }, 2000);
    };

    const callbackHi = (name) => console.log(`Hello ${name}!`);
    waitAndGreet('Susan', callbackHi);


    /* EJ 4: CALLBACKS & ARRAYS
    Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array. */

    const array3 = [15, 25, 35, 45, 55];

    const processElements = (array3, callbackArr) => {
        array3.forEach(element => {
            console.log(callbackArr(element))
    })
    };

    const callbackArr = (element) => element * 2;
    processElements(array3, callbackArr);


    /* EJ 5: CALLBACKS TWO PARAMETES
    Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada. */

    const processString = (string, callbackTransform) => {
        let newString = string.toUpperCase();
        callbackTransform(newString);
    };

    const callbackTransform = (newString) => console.log((newString.charAt(0)));

    processString('Altamira', callbackTransform);


