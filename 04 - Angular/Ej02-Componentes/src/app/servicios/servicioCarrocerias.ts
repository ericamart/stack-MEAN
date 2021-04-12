export class ServicioCarrocerias {

    private categorias:string[] = [ '3 puertas', '4 puertas', '5 puertas', 'Ranchera', 'Monovolumen', 'Targa', 'Coupe', 'Decapotable', 'SUV', 'Spider' ];

    public listar():string[] {
        return this.categorias;
    }

}