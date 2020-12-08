import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgramsComponent]
})
export class ProgramsModule { }
