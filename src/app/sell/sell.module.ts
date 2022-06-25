import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeModule } from '../prime/prime.module';
import { MayusculasPipe } from './pipes/mayusculas.pipes';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { VuelaPipePipe } from './pipes/vuela-pipe.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    OrderComponent,
    MayusculasPipe,
    CapitalizarPipe,
    VuelaPipePipe,
    ColorPipePipe,
    OrdenarPipe
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
