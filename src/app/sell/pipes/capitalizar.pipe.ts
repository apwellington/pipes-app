import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value:string, lastChar: boolean = false): string {
    if(lastChar){
      return value.replace(value.charAt(0), value.charAt(0).toUpperCase()).replace(value.charAt(value.length -1), value.charAt(value.length -1).toUpperCase());
    }
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
  }

}
