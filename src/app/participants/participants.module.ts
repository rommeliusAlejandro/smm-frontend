import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants/participants.component';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [ParticipantsComponent, ParticipantComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    CardModule
  ],
  exports: [ParticipantsComponent]
})
export class ParticipantsModule { }
