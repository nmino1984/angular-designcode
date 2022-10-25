import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { TitleH1Component } from './components/titles/title-h1/title-h1.component';

import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { RouterModule } from '@angular/router';
 
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...fromComponents.components, TitleH1Component, CardUserComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components
  ],
})
export class SharedModule { }
