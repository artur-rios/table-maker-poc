import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';
import { DataInputFormComponent } from './data-input-form/data-input-form.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { TableFormComponent } from './table-form/table-form.component';

@NgModule({
  declarations: [DataInputFormComponent, HomeComponent, TableFormComponent],
  imports: [
    CommonModule,
    ClipboardModule,
    MainRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class MainModule {}
