import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from '../participants.service';
import {Gender, Participant} from '../participant';
import {SelectItem} from 'primeng/api';
import {AppLogger} from '../../framework/logger/app.logger';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: Participant[] = [];

  selectedParticipant: Participant[] = null;
  participant: Participant = null;
  new = false;

  private readonly logger = AppLogger.getInstance(ParticipantsComponent.name);

  constructor(private participantsService: ParticipantsService) {
  }

  ngOnInit() {

    this.participantsService.getAll().subscribe(
      next => {
        this.participants = next;
      }
    );
  }

  setParticipant() {
    this.participant = this.selectedParticipant[0];
    this.new = false;
  }

  newParticipant() {
    this.new = true;
    this.participant = {
      id: '',
      name: '',
      gender: '',
      active: false,
      age: '',
      skills: [],
      reserved: false
    };
  }

  newParticipantAddedHandler(newParticipant: Participant) {
    this.new = false;
    const aux = this.participants;
    aux.push(newParticipant);
    this.participants = aux;
    this.logger.debug(`${newParticipant.name} was added`);
  }

}
