import {Component, OnInit} from '@angular/core';
import {ParticipantsService} from '../participants.service';
import {Gender, Participant} from '../participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: Participant[] = [];

  selectedParticipant: Participant[] = null;
  participant: Participant = null;
  gender: any = Gender;
  genders: any;

  constructor(private participantsService: ParticipantsService) {
  }

  ngOnInit() {

    this.genders = [
      {name: 'Masculino', value: this.gender.MALE.valueOf()},
      {name: 'Femenino', value: this.gender.FEMALE.valueOf()},
    ];

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
