import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent  {

  nombreLower: string = 'wellington';
  nombreTitle: string = 'adames';
  nombreUpper: string = 'POZO';

  fecha: Date = new Date();
  

}
