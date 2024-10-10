import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './component/loader/loader.component';

export const modules: any = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  MatTooltip,
  MatIconModule,
  LoaderComponent
]

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: []

})

export class SharedModule { }
