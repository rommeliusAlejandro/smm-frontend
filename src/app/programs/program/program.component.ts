import {Component, Input, OnInit} from '@angular/core';
import {Program, Week, Task} from '../program';
import {Gender} from '../../participants/participant';
import {SelectItem} from 'primeng/api';
import * as moment from 'moment';
import {ProgramsService} from '../programs.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Input()
  program: Program = new Program();

  gender: any = Gender;
  genders: SelectItem[];

  taskNames: SelectItem[];

  @Input()
  newProgram: boolean;

  constructor(private readonly programsService: ProgramsService) {
  }

  ngOnInit() {

    this.genders = [
      {label: 'M', value: this.gender.MALE.valueOf()},
      {label: 'F', value: this.gender.FEMALE.valueOf()},
    ];


    this.taskNames = [
      {label: 'Lectura de la Biblia', value: 'READING'},
      {label: 'Primera conversacion', value: 'FIRST_TALK'},
      {label: 'Revisita', value: 'FIRST_VISIT'},
      {label: 'Curso biblico', value: 'BIBLICAL_CLASS'},
      {label: 'Discurso', value: 'SPEECH'},
      {label: 'Otro', value: 'OTHER'},
    ];

  }

  updateProgram() {
    console.log('will update');
  }

  createProgram() {
    this.programsService.create(this.program)
      .subscribe(next => {
        console.log(next);
      });
  }

  createWeeks() {
    const monday = moment(`${this.program.year}-${this.program.month}-01`)
      .startOf('month')
      .day('Monday');

    const weeks: Week[] = [];

    if (monday.date() > 7) {
      monday.add(7, 'd');
    }
    const month = monday.month();

    while (month === monday.month()) {
      weeks.push({
        date: monday.format('DD/MM/YYYY'),
        tasks: []
      });
      monday.add(7, 'd');
    }

    this.program.weeks = weeks;
  }

  addTask(weekIndex: number) {
    if (!this.program.weeks[weekIndex].tasks) {
      this.program.weeks[weekIndex].tasks = [];
    }
    this.program.weeks[weekIndex].tasks.push(new Task());
  }

  deleteTask(week, task) {
    this.program.weeks[week].tasks.splice(task, 1);
  }

}
