import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonthlyProgramsComponent} from './monthly-programs/monthly-programs.component';
import {PanelModule} from 'primeng/panel';
import {OrderListModule} from 'primeng/orderlist';
import { MonthlyProgramComponent } from './monthly-program/monthly-program.component';
import {
  ButtonModule,
  CardModule,
  DialogModule,
  DropdownModule,
  ListboxModule,
  MultiSelectModule,
  ScrollPanelModule,
  TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MonthlyProgramsComponent, MonthlyProgramComponent],
  exports: [MonthlyProgramsComponent],
  imports: [
    CommonModule,
    PanelModule,
    OrderListModule,
    TabViewModule,
    ScrollPanelModule,
    CardModule,
    ListboxModule,
    FormsModule,
    MultiSelectModule,
    ButtonModule,
    DialogModule,
    DropdownModule
  ]
})
export class MonthlyProgramsModule { }
