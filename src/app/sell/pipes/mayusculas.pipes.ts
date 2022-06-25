import { Pipe, PipeTransform } from "@angular/core";


//indicar que es un pipe
//implementar pipe transformo y sobreescribir el metodo tranform
@Pipe({
    name: 'mayuscula'
})
export class MayusculasPipe implements PipeTransform {

    transform(value:string): string {
        return value.toUpperCase();
    }

}