import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonthlyProgramsComponent} from './monthly-programs/monthly-programs.component';

@NgModule({
  declarations: [MonthlyProgramsComponent],
  exports: [MonthlyProgramsComponent],
  imports: [
    CommonModule
  ]
})
export class MonthlyProgramsModule { }
