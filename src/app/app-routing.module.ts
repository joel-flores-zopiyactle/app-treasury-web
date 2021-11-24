import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { IndexComponent } from './page/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(e => e.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
