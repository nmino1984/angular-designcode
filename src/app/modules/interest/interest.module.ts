import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InterestListComponent } from './interest-list/interest-list.component';
import { InterestComponent } from './interest/interest.component';
import { InterestRoutingModule } from './interest-routing.module';


@NgModule({
  declarations: [
    InterestComponent,
    InterestListComponent
  ],
  imports: [
    SharedModule,
    InterestRoutingModule
  ]
})
export class InterestModule { }
