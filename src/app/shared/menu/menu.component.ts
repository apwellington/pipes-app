import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pipes',
          icon: 'pi pi-fw pi-bookmark',
          items: [
              {label: 'Basic', icon: 'pi pi-fw pi-apple', routerLink:'/'},
              {label: 'Number', icon: 'pi pi-fw pi-dollar', routerLink:'numbers'},
              {label: 'No Common', icon: 'pi pi-fw pi-bolt', routerLink:'uncommons'},
              {label: 'Order', icon: 'pi pi-fw pi-box', routerLink:'order'}
          ]
      },
      {
          label: 'Sell',
          icon: 'pi pi-fw pi-bell'
      }
  ];
  }

}
