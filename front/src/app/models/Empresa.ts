export class Empresa{
    constructor(
        public _id: string,
        public numeroEmpresa: string,
        public nombreEmpresa: string,
        public direccion: string,
        public contacto: string,
        public telefono: string,
        public llamadasEstado: string,
        public correo: string,
        public etapaVenta: string,
        public medioComunicacion: string,
        public estadoSeguimiento:string
    ){}
}
