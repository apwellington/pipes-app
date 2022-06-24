import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './sell/pages/basic/basic.component';
import { NoCommonsComponent } from './sell/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sell/pages/numbers/numbers.component';
import { OrderComponent } from './sell/pages/order/order.component';

const routes: Routes = [
  {
    path:'',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path:'numbers',
    component: NumbersComponent
  },
  {
    path:'uncommons',
    component: NoCommonsComponent
  },
  {
    path:'order',
    component: OrderComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
