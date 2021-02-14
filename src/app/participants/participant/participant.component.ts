import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Gender, History, Participant} from '../participant';
import {SelectItem} from 'primeng/api';
import {ParticipantsService} from '../participants.service';
import {AppLogger} from '../../framework/logger/app.logger';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit, OnChanges {

  @Input()
  participant: Participant = new Participant();

  private readonly logger = AppLogger.getInstance(ParticipantComponent.name);

  gender: any = Gender;
  genders: SelectItem[];
  ages: SelectItem[];
  currentHistory: History[];
  newLog: History;

  constructor(private participantsService: ParticipantsService) {
  }

  ngOnInit() {
    this.newLog = {
      date: null,
      room: 'MAIN_ROOM',
      monthlyProgramId: '',
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

  ngOnChanges(changes: SimpleChanges): void {
    this.loadHistory();
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
    this.logger.debug(this.newLog);

    this.participantsService.logHistory(
      this.participant.id,
      this.newLog
    ).subscribe(
      next => {
        this.newLog = {
          date: null,
          room: 'MAIN_ROOM',
          monthlyProgramId: '',
        };
        this.loadHistory();
      },
      error => {
        console.error(error);
      }
    );
  }

  loadHistory() {
    this.participantsService.loadHistory(this.participant.id)
      .subscribe(history => {
        this.currentHistory = history;
      });
  }

  deleteLog(index) {
    const history = this.participant.history;
    history.splice(index, 1);
    this.participant.history = history;
  }
}
