// 1.1 ARROW FUNCTIONS

/* NIVEL 1

    EJ 1: CONVERSION DE FUNCIONES
    Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}. */

    const add = (x, y) => x + y;
    add(3, 7)


/*  EJ 2: FUNCION ARROW SIN PARAMETROS
    Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100. */

    const randomNumber = () => Math.floor(Math.random() * (100 - 0 + 1) + 0);



/*  EJ 3: THIS EN FUNCIONES ARROW
    Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});. */