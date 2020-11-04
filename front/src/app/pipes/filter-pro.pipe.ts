import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPro'
})
export class FilterProPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPo=[];
    for(const test of value){
      if(test.nombres.indexOf(arg)>-1){
        //console.log('Si')
        resultPo.push(test);

      }
    }
    return resultPo;
  }

}
