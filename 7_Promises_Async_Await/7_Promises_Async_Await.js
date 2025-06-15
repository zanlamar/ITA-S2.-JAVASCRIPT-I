// 1.7  PROMISES & ASYNC / AWAIT
console.log(' ---------- 1.7 PROMISES & ASYNC / AWAIT ----------')


/* NIVEL 1

    EJ 1: PROMISE CREATION
    Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'. */

    function greeting() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Hola, món`);
            }, 2000);
        });
    }


    /* EJ 2: PROMISE USE
    Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola. */

    greeting()
        .then((result) => {
            console.log(result);
    });



    /* EJ 3: PROMISE WITH REJECT
    Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */

    function checkHi(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input === 'Hello') {
                    resolve('Hello to you too!');
                } else {
                    reject(`Ey, haven't you seen me?`);
                }
            }, 2000);
        });
    };

    checkHi('Bye')
        .then((result) => {
            console.log(`All ok.`, result);
        })
        .catch((error) => {
            console.log(`Ooops...`, error);
    });



    /* EJ 4: ASYNC / AWAIT
    Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. */

    async function moreGreeting() {
        const x = await greeting();
        console.log(x);
    };

    moreGreeting();

/* NIVEL 2

    EJ 5: ERROR MANAGEMENT W SYNC / AWAIT
    Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch. */

    async function moreGreeting() {
        try {
            const x = await greeting();
            console.log(x, '-- No errors');
        } catch (error) {
            console.log('Error. Something is not right.', error);
        }
    };


/*  NIVEL 3

    EJ 6: PROMISE.ALL
   Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola. */

   function footSize() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(24);
            }, 2000);
        });
    }

    function shoeSize() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(38);
            }, 3000);
        });
    }

    Promise.all([footSize(), shoeSize()])
        .then(([foot, shoe]) => {
            console.log(`Fot a foot size ${foot}, the ideal shoe size would be ${shoe}.`);
        })  
        .catch((error) => {
            console.log(error.message);
        });