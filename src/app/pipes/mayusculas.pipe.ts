import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, valor:boolean):string{
    return(valor)?value.toUpperCase():value.toLocaleLowerCase();
  }

}
