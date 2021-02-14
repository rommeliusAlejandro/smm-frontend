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

  constructor(private readonly monthlyProgramsService: MonthlyProgramsService) { }

  ngOnInit() {

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

  openEditTicket(task) {
    this.currentTicket = task;
    this.editTicket = true;
  }
}
