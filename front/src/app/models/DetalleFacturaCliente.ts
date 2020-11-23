
export class DetalleFacturaCliente{
    constructor(
        public _id:string,
        public conceptoItem: string,
        public precioItem:number,
        public precioTotalItem :number,
        public ivaItem:number,
        public itItem:number,
    ){

    }
}

