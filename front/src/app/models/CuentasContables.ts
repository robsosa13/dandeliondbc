export class CuentasContables{
    constructor(
        public _id:string,
        public debe : Number,
        public haber: Number,
        // idfactura: {type: Schema.ObjectId, ref: 'facturaCliente'},
        // debe:Decimal,
        // haber:Decimal,
        // fechaRegistro: {type: Date, default: Date.now},
    ){

    }
}