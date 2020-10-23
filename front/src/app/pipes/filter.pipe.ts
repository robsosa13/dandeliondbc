import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//public _person = Person;
transform(value: any, arg: any): any {
  // if(arg==''|| arg.length<3 ){
  //   return value;
  // }
  console.log(value);
  const resultPersons = [];
  for(const venta of value){
   // console.log('Tipo de dato',typeof person.profesion);
   //  if(person.profesion.indexOf(arg)>-1){
    //   if(venta.idcliente.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
    
    //   resultPersons.push(venta);
    // };

  };
  return resultPersons;
}
}
