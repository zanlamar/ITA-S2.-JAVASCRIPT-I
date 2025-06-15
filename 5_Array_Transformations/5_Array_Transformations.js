// 1.5  ARRAY TRANSFORMATIONS
console.log(' ---------- 1.5 ARRAY TRANSFORMATIONS  ----------')


/* NIVEL 1

    EJ 1: MAP
    Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. */

    const arrayMap = [1, 2, 3, 4];
    const NEWarrayMap = arrayMap.map(element => Math.pow(element, 2));
    console.log(NEWarrayMap);


/*  EJ 2: FILTER
    Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells. */

    const arrayFilter = [1, 2, 3, 4];
    const NEWarrayFilter = arrayFilter.filter((element) => element % 2 === 0);
    console.log(NEWarrayFilter);


/*  EJ 3: FIND
    Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10. */

    const arrayFind = [1, 10 , 8, 11];

    let found = arrayFind.find((element) => element > 10);
    console.log(found);


/*  EJ 4: REDUCE
    Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.*/

    const arrayRed =  [13, 7, 8, 21];
    
    let resultRed = arrayRed.reduce(
        (acc, cv) => acc + cv, 0);

    console.log(resultRed);


/* NIVEL 2

    EJ 5: ONE LINE
    Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
    - Filtra els nombres majors o iguals a 10.
    - Multiplica cada nombre filtrat per 2.
    - Calcula la suma dels nombres filtrats i multiplicats per 2.
    - La funció ha de retornar el resultat de la suma. */

    const arrayOne = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

    let resultOne = ((arrayOne.filter((x) => x >= 10)).map(x => x * 2)).reduce((acc, x) => acc + x);
    console.log(resultOne);


/* NIVEL 3

    EJ 6: EVERY / SOME
    Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament. */

    const arrayTwo = [11, 12, 13, 14];
    const over10 = (element) => element > 10;
    
    let every = arrayTwo.every(over10);
    let some = arrayTwo.some(over10);

    console.log(every);
    console.log(some);

    
