import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants/participants.component';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { ParticipantComponent } from './participant/participant.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [ParticipantsComponent, ParticipantComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    OverlayPanelModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ],
  exports: [ParticipantsComponent]
})
export class ParticipantsModule { }
