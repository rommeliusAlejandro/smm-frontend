import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from '../participants.service';
import {Gender, Participant} from '../participant';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: Participant[] = [];

  selectedParticipant: Participant[] = null;
  participant: Participant = null;

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
  }


}
