// 1.1 ARROW FUNCTIONS

/* NIVEL 1

    EJ 1: CONVERSION DE FUNCIONES
    Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}. */
    
    const add = (x, y) => x + y;
    add(3, 7)
    console.log(add(3,7));


/*  EJ 2: FUNCION ARROW SIN PARAMETROS
    Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100. */

    const randomNumber = () => Math.floor(Math.random() * 101);
    console.log(randomNumber());
    console.log(randomNumber());


/*  EJ 3: THIS EN FUNCIONES ARROW
    Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});. */ 

    class Person {
        constructor(name) {
            this.name = name;
        }

        greet = () => console.log(`Hola, ${this.name}`);
    }

    const persona = new Person('Jimmy');
    persona.greet();



/* NIVEL 2

    EJ 4: FUNCIÓN FLECHA EN UN LOOP
    Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.  */  

    const array = [randomNumber(), randomNumber(), randomNumber()];

    const printNumbers = (array) => {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
    printNumbers(array);




/*  EJ 5: setTimeout
    Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.  */ 

    setTimeout(() => {
        console.log(`Uy, han pasado tres segundos`);
        }, "3000");
 


