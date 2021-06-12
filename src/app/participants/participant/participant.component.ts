import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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

  @Input()
  new: boolean;

  @Output() addedParticipant: EventEmitter<Participant> = new EventEmitter();


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

  createParticipant() {
    this.participantsService.create(this.participant)
      .subscribe(
        next => {
          this.logger.debug(JSON.stringify(next));
          this.participant = next;
          this.new = false;
          this.addedParticipant.emit(next);
        }
      );
  }

  updateParticipant() {
    this.participantsService.update(this.participant.id, {
      name: this.participant.name,
      age: this.participant.age,
      skills: this.participant.skills,
      gender: this.participant.gender,
      active: this.participant.active,
      reserved: this.participant.reserved
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
    /*const history = this.participant.history;
    history.splice(index, 1);
    this.participant.history = history;*/
  }
}
