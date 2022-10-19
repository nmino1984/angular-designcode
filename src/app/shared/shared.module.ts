import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import * as fromComponents from './components';
 
@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [...fromComponents.components],
  exports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
  ],
})
export class SharedModule { }
