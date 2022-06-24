import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterComponent } from './starter/starter.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    StarterComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [StarterComponent]
})
export class PipesModule { }
