import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs/programs.component';
import {OrderListModule} from 'primeng/orderlist';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { ProgramComponent } from './program/program.component';
import {
  CardModule,
  InputSwitchModule, InputTextModule,
  ListboxModule,
  ScrollPanelModule,
  SelectButtonModule,
  SpinnerModule,
  TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProgramsComponent, ProgramComponent],
  imports: [
    CommonModule,
    OrderListModule,
    PanelModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    InputSwitchModule,
    FormsModule,
    SelectButtonModule,
    SpinnerModule,
    ScrollPanelModule,
    ListboxModule,
    InputTextModule
  ],
  exports: [ProgramsComponent]
})
export class ProgramsModule { }
