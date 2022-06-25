import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {

  enMayuscula: boolean = true;
  orderBy:string = "";
  heroes: Heroe[] = [
    {nombre:"Peter", vuela:false, color: Color.rojo},
    {nombre:"Bruce", vuela:false, color: Color.negro},
    {nombre:"Clarck", vuela:true, color: Color.azul},
    {nombre:"Jhon", vuela:true, color: Color.verde}
  ];

  cambiar(){
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOnden(valor: string){
    this.orderBy = valor;
  }

 }
