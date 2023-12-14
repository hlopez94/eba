import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimersRoutingModule } from './primers-routing.module';
import { PrimersComponent } from './primers.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsModule } from '../shared/dialogs/dialogs.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [PrimersComponent],
  imports: [
    CommonModule,
    PrimersRoutingModule, MatSelectModule, MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogsModule,
    MatDialogModule
    ]
})
export class PrimersModule { }
