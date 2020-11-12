
export class Cliente{
    constructor(
        public _id:string,
        public numeroCliente : string,
        public nombre: string,
        public nit:string,
        public direccion :number,
        public telefono:number,
        public formaPago:string,
        public estado:string,
    ){

    }
}