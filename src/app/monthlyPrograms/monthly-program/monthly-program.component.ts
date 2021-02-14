import {Component, Input, OnInit} from '@angular/core';
import {MonthlyProgram, Task} from '../monthly-program';
import {ParticipantsService} from '../../participants/participants.service';
import {Participant} from '../../participants/participant';
import {MonthlyProgramsService} from '../monthly-programs.service';
import {ProgramsService} from '../../programs/programs.service';

@Component({
  selector: 'app-monthly-program',
  templateUrl: './monthly-program.component.html',
  styleUrls: ['./monthly-program.component.css']
})
export class MonthlyProgramComponent implements OnInit {

  @Input()
  assignmentList: MonthlyProgram;

  editTicket = false;

  currentTicket: Task;

  currentWeek = 0;

  candidates: { label: string, value: Participant }[];

  mainAssigned: Participant;
  helperAssigned: Participant;

  rooms = {
    MAIN_ROOM: 'Sala Principal',
    AUX_ROOM_1: 'Sala Auxiliar'
  };

  taskNames = {
    READING: 'Lectura de la Biblia',
    FIRST_TALK: 'Primera conversacion',
    FIRST_VISIT: 'Revisita',
    BIBLICAL_CLASS: 'Curso Biblico',
    SPEECH: 'Discurso',
    OTHER: 'Otro'
  };

  constructor(private readonly monthlyProgramsService: MonthlyProgramsService,
              private readonly participantsService: ParticipantsService) {
  }

  ngOnInit() {

  }

  setWeek(event) {
    this.currentWeek = event.index;
  }

  updateAssignments() {
    this.monthlyProgramsService.update(this.assignmentList.id, this.assignmentList)
      .subscribe(
        next => {
          console.log(next);
        },
        error => console.error(error)
      );
  }

  approve() {

  }

  openEditTicket(task: Task, dateString: string) {
    const date = new Date(dateString);
    this.currentTicket = task;
    this.participantsService.findCandidates(date.getMonth() + 1,
      this.currentTicket.gender,
      date.getFullYear())
      .subscribe(candidates => {
        this.editTicket = true;
        this.candidates = candidates.map(candidate => {
          return {label: candidate.name, value: candidate};
        });
      });
  }

  updateTicket() {

    const taskIndex = this.assignmentList.weeks[this.currentWeek].rooms[0].participants.indexOf(this.currentTicket);
    this.currentTicket.mainId = this.mainAssigned.id;
    this.currentTicket.mainName = this.mainAssigned.name;

    if (this.helperAssigned) {
      this.currentTicket.helperId = this.helperAssigned.id;
      this.currentTicket.helperName = this.helperAssigned.name;
    }

    this.assignmentList.weeks[this.currentWeek]
      .rooms[0]
      .participants[taskIndex] = this.currentTicket;

    this.updateAssignments();
    this.closeTicket();
  }

  closeTicket() {
    this.currentTicket = null;
    this.mainAssigned = null;
    this.helperAssigned = null;
    this.editTicket = false;
  }
}
