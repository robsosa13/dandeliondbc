export class DetalleVenta{
    constructor(
        public _id:string,
        public nombreEmpresa:string,
        public tiempoServicioDesde:string,
        public tiempoServicioHasta:string,
        public direccion:string,
        public telefono:string,
        public puestoDesempenado:string,
        public sueldoInicial:string,
        public sueldoFinal:string,
        public motivoCambioTrabajo:string,
        public nombreJefeDirecto:string,
        public puestoJefe:string,
        public solicitarInfo:string
    ){

    }
}
