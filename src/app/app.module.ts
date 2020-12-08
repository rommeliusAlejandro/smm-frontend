import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { MonthlyProgramsComponent } from './monthlyPrograms/monthly-programs/monthly-programs.component';
import {ParticipantsModule} from './participants/participants.module';
import {ProgramsModule} from './programs/programs.module';
import {MonthlyProgramsModule} from './monthlyPrograms/monthly-programs.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PanelMenuModule,
    ParticipantsModule,
    ProgramsModule,
    MonthlyProgramsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
