import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core/core.routing';

const routes: Routes = [
  { path: '', redirectTo:'/store', pathMatch: 'full' },
  //{ path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
