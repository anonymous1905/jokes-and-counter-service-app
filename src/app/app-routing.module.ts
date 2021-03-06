import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports our comnponent into the file
import {AppComponent} from './app.component';


// we set all paths to point to AppComponent
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
