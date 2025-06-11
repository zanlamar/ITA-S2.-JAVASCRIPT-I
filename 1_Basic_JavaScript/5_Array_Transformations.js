// 1.5  ARRAY TRANSFORMATIONS

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
    
    let result = arrayRed.reduce(
        (acc, cv) => acc + cv, 0);

    console.log(result);
    