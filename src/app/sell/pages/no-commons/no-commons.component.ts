import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent {
  nombre: string = "Wellington";
  genero: string = "m";

  mapa= {
    "m":'invitarlo',
    "f": 'Invitarla'
  }

  clientes: string[] = ["Demo","Test","Other", "Bug"];

  clintesMapa = {
    "=0": "No tenemos clientes esperando",
    "=1": "Tenemos un cliente esperando",
    "other": "Tenemos # clientes esperando",
  }


  cambiarPersona(){
      this.nombre = "Melisa";
      this.genero = "f";

  }

  borrarCliente(){
    this.clientes = [];
  }


  //keyvalue pipe

  persona = {
    nombre: "Juancho",
    edad: 20,
    direccion: "Canada"
  }


  heroes = [
    {nombre: "Clarck Kent", poder: "Vuela"},
    {nombre: "Batman", poder: "Cash"},
    {nombre: "Deadpool", poder: "Balas"}
  ]


  observable = interval(5000);



  valorPromesa = new Promise((resolve, reject)=>{
    setInterval(()=>{
        resolve("Data de promesa");
    }, 3500);
  }); 


}
