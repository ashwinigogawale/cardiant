import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormbuilderComponent } from './modules/main/formbuilder/formbuilder.component';


const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
