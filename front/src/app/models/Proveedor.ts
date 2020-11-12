
export class Proveedor{
    constructor(
        public _id:string,
        public numeroProveedor : string,
        public nombre: string,
        public nit:string,
        public direccion :number,
        public telefono:number,
        public formaPago:string,
        public estado:string,
    ){

    }
}