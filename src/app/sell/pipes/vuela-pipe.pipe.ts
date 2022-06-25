import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipePipe implements PipeTransform {

  transform(value: boolean = false): string {
    return (value)?"si vuela":"no vuela";
  }

}
