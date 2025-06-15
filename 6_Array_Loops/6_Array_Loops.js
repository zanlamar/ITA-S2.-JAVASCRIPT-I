// 1.6  ARRAY LOOPS
console.log(' ---------- 1.6 ARRAY LOOPS ----------')


/* NIVEL 1

    EJ 1: FOR EACH
    forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

    let names = ['Anna', 'Bernat', 'Clara'];
    names.forEach((element) => console.log(element));


    /*  EJ 2: FOR - OF
    for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

    for (let element of names) {
        console.log(element);
    };
    

    /* EJ 3: FILTER
    filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6]; */

    let numbers = [1, 2, 3, 4, 5, 6];
    let NEWnumbers = numbers.filter((element) => element % 2 === 0 );
    console.log(NEWnumbers);
    


/* NIVEL 2

    EJ 4: FOR - IN
    Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent. */

    let obj = { name: 'Ona', age: 25, city: 'Barcelona' };

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }


    /*  EJ 5: FOR - OF WITH BREAK
    for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6]; */

    for (const element of numbers) {
        if (element === 5) break;
        console.log(element);
        
    }



/* NIVEL 3

    EJ 6: FOR - OF WITH INDEX
    for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara'] */

    for (const [index, element] of names.entries()) {
        console.log(`${element}, ${index}`)
    }


