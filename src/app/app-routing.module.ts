import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ParticipantsComponent} from './participants/participants/participants.component';
import {MonthlyProgramsComponent} from './monthlyPrograms/monthly-programs/monthly-programs.component';
import {ProgramsComponent} from './programs/programs/programs.component';
import {ParticipantsModule} from './participants/participants.module';
import {ProgramsModule} from './programs/programs.module';
import {MonthlyProgramsModule} from './monthlyPrograms/monthly-programs.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'monthlyPrograms', component: MonthlyProgramsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ParticipantsModule,
    ProgramsModule,
    MonthlyProgramsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
