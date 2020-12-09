import {Component, Input, OnInit} from '@angular/core';
import {Gender, History, Participant} from '../participant';
import {SelectItem} from 'primeng/api';
import {ParticipantsService} from '../participants.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  @Input()
  participant: Participant = new Participant();

  gender: any = Gender;
  genders: SelectItem[];
  ages: SelectItem[];
  newLog: History;

  constructor(private participantsService: ParticipantsService) {
  }

  ngOnInit() {
    this.newLog = {
      date: null,
      room: 'MAIN_ROOM'
    };

    this.genders = [
      {label: 'Masculino', value: this.gender.MALE.valueOf()},
      {label: 'Femenino', value: this.gender.FEMALE.valueOf()},
    ];

    this.ages = [
      {label: 'Menor', value: 'KID'},
      {label: 'Adulto', value: 'ADULT'},
      {label: 'Adulto Mayor', value: 'SENIOR'},
    ];
  }

  updateParticipant() {
    this.participantsService.update(this.participant.id, {
      name: this.participant.name,
      age: this.participant.age,
      history: this.participant.history,
      skills: this.participant.skills,
      gender: this.participant.gender,
      active: this.participant.active
    })
      .subscribe(next => {
          console.log(`${next.id} updated`);
        },
        error => {
          console.error(error);
        });
  }

  addHistory() {
    this.participantsService.logHistory(
      this.participant.id,
      this.newLog
    ).subscribe(
      next => {
        this.newLog.date = null;
        this.participant.history = next.history;
      },
      error => {
        console.error(error);
      }
    );
  }
}
