import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeModule } from '../prime/prime.module';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrderComponent
  ],
})
export class SellModule { }
