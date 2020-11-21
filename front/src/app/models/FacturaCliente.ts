
export class FacturaCliente{
    constructor(
        public _id:string,
        public idCliente : string,
        public iduser: string,
        public numeroFactura:string,
        public conceptoItem:string,
        public precioTotal:number,
        public ivaTotal:number,
        public itTotal:number,

    ){

    }
}