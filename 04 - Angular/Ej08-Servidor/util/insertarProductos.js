let mongoose = require("mongoose");
let Producto = require("../entidades/producto.js").Producto;

mongoose.connect("mongodb://localhost:27017/bbdd", function(error, db){
    if(error){
        console.log(error);
        process.exit(1);
    }

    let p1 = new Producto( { codigo:'COD-001', 
                             nombre:'Chintáfono', 
                             descripcion:'Lorem fistrum laboris apetecan elit. Ut ut velit et irure. Labore incididunt tempor ahorarr minim está la cosa muy malar no puedor. Voluptate al ataquerl esse ese pedazo de no te digo trigo por no llamarte Rodrigor te va a hasé pupitaa. Va usté muy cargadoo a wan quietooor caballo blanco caballo negroorl minim te voy a borrar el cerito. Minim ut veniam te va a hasé pupitaa ese que llega mamaar velit. Laboris occaecat amatomaa nostrud reprehenderit eiusmod reprehenderit quietooor.',
                             precio:25,
                             imagen:'',
                             categoria:'cat1' });
    let p2 = new Producto( { codigo:'COD-002', nombre:'Fleje',      descripcion:'Qué dise usteer adipisicing consequat de la pradera diodenoo qué dise usteer sexuarl officia. Hasta luego Lucas sit amet reprehenderit incididunt magna. Duis condemor de la pradera no puedor voluptate ese pedazo de. Ut sexuarl al ataquerl adipisicing minim jarl occaecat benemeritaar esse ut qué dise usteer. Mamaar occaecat ese hombree aliquip ese hombree commodo labore adipisicing irure. Diodenoo duis cillum fistro minim consectetur. Minim ese pedazo de quis ese pedazo de quis condemor me cago en tus muelas amatomaa llevame al sircoo ahorarr aliquip.',precio:50,imagen:'',categoria:'cat1' });
    let p3 = new Producto( { codigo:'COD-003', nombre:'Elemento disruptor', descripcion:'Ese que llega torpedo sexuarl ad officia de la pradera de la pradera incididunt papaar papaar. Qui amatomaa aliqua elit ut pupita sed a peich. Sed exercitation de la pradera sed aute hasta luego Lucas magna. Papaar papaar consectetur enim irure está la cosa muy malar consequat mamaar velit jarl tiene musho peligro. Voluptate se calle ustée aliquip a peich adipisicing. Mamaar mamaar benemeritaar veniam. Reprehenderit benemeritaar enim eiusmod ese pedazo de consectetur diodenoo veniam laboris a wan. Incididunt exercitation te voy a borrar el cerito hasta luego Lucas te voy a borrar el cerito magna pecador está la cosa muy malar qué dise usteer.',precio:75,imagen:'',categoria:'cat1' });
    let p4 = new Producto( { codigo:'COD-004', nombre:'Chisme', descripcion:'Lorem fistrum amatomaa hasta luego Lucas tiene musho peligro ese que llega de la pradera esse nisi ullamco. Al ataquerl reprehenderit labore ullamco ut qui irure duis no puedor ese pedazo de. De la pradera cillum condemor cillum benemeritaar. Pupita mamaar velit commodo cillum hasta luego Lucas de la pradera magna laboris. Condemor dolore nisi consectetur. Pecador de la pradera ese pedazo de elit enim llevame al sircoo condemor va usté muy cargadoo mamaar. Torpedo fistro tempor commodo.',precio:100,imagen:'',categoria:'cat2' });
    let p5 = new Producto( { codigo:'COD-005', nombre:'Trasto', descripcion:'A wan mamaar laboris mamaar et consectetur diodenoo te va a hasé pupitaa. A peich llevame al sircoo adipisicing papaar papaar sexuarl dolore quis te voy a borrar el cerito jarl jarl. Cillum nisi occaecat jarl. Nostrud diodeno nisi pupita eiusmod. Velit torpedo benemeritaar irure consequat officia de la pradera condemor.',precio:125,imagen:'',categoria:'cat2' });
    let p6 = new Producto( { codigo:'COD-006', nombre:'Zarrio', descripcion:'Sed pupita elit sexuarl aute no puedor. Jarl sed hasta luego Lucas va usté muy cargadoo va usté muy cargadoo te va a hasé pupitaa ullamco diodeno. Pecador se calle ustée qui quis quis de la pradera nostrud. Va usté muy cargadoo elit hasta luego Lucas sexuarl tempor no puedor papaar papaar consequat ese hombree diodenoo hasta luego Lucas. Aute exercitation ahorarr se calle ustée minim minim quis al ataquerl aliqua.',precio:150,imagen:'',categoria:'cat3' });
    
    p1.save()
    .then( () => p2.save() )
    .then( () => p3.save() )
    .then( () => p4.save() )
    .then( () => p5.save() )
    .then( () => p6.save() )
    .then( () => mongoose.disconnect() );

});

