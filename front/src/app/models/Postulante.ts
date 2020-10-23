export class Postulante{
    constructor(
        public _id:string,
        public nombres:string,
        public apellidoPaterno:string,
        public apellidoMaterno: string,
        public edad:number,
        public domicilio:string,
        public zona:string,
        public sexo:string,
        public lugarNacimiento: string,
        public FechaNacimiento:string,
        public naionalidad:string,
        public ci:number,
        public expedido:string,
        public estadoCivil:string,
        public viveCon: string,
        public personaDependencia:string,
        public profesion:string,
    ){

    }
}