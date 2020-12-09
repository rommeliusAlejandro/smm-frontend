import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs/programs.component';
import {OrderListModule} from 'primeng/orderlist';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { ProgramComponent } from './program/program.component';
import {TabViewModule} from 'primeng/primeng';

@NgModule({
  declarations: [ProgramsComponent, ProgramComponent],
  imports: [
    CommonModule,
    OrderListModule,
    PanelModule,
    ButtonModule,
    TabViewModule
  ],
  exports: [ProgramsComponent]
})
export class ProgramsModule { }
