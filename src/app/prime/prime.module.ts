import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import{InputTextModule} from 'primeng/inputtext';
import {CardModule} from "primeng/card";
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';



//Module only for export anohters modules. 
@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule

  ]
})
export class PrimeModule { }
