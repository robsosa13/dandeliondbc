export class Activo{
    constructor(
        public _id:string,
        public titulo : string,
        public descripcion: string,
        public imagen:string,
        public precio_compra :number,
        public stock:number,
        public pertenece:string,
        public idcategoria:string,
        public modelo :string,
        public marca:string,
        public nroSerie:string,
        public codigoDBC:string,
        public fechaCompra:Date,
    ){

    }
}