import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  nombre:string = 'Wellington Adames';
  title:string = "Bagreverse"
  subtitle:string = "Bagreverse is other suck universe"
  valor: number = 100;
  obj = {
   "nombre":"well"
  }

  constructor() { }

  ngOnInit(): void {
  }

  mostrarNombre(newval:string){
    this.nombre = newval;
  }

}
