import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestComponent } from './interest/interest.component';
import { InterestListComponent } from './interest-list/interest-list.component';

const routes: Routes = [
  {
    path: '',
    component: InterestListComponent
  },
  {
    path: ':id',
    component: InterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestRoutingModule { }
