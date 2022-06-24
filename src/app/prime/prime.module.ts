import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import{InputTextModule} from 'primeng/inputtext';
import {CardModule} from "primeng/card";
import {MenubarModule} from 'primeng/menubar';


//Module only for export anohters modules. 
@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeModule { }
