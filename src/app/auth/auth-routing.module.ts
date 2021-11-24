import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './page/sing-in/sing-in.component';
import { SingUpComponent } from './page/sing-up/sing-up.component';

const routes: Routes = [
  {
    path: 'sing-in',
    component: SingInComponent
  },

  {
    path: 'sing-up',
    component: SingUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
