import {Component, Input, OnInit} from '@angular/core';
import {MonthlyProgram} from '../monthly-program';
import {MonthlyProgramsService} from '../monthly-programs.service';

@Component({
  selector: 'app-monthly-programs',
  templateUrl: './monthly-programs.component.html',
  styleUrls: ['./monthly-programs.component.css']
})
export class MonthlyProgramsComponent implements OnInit {

  @Input()
  assignments: MonthlyProgram[];

  selectedAssignments: MonthlyProgram[];

  assigmentList: MonthlyProgram = null;

  constructor(private readonly monthlyProgramsService: MonthlyProgramsService) {
  }

  ngOnInit() {

    this.monthlyProgramsService.getAll().subscribe(
      next => {
        this.assignments = next;
      },
      error => {
        console.log(error);
      }
    );

  }

  setSelectedAssignments() {
    this.assigmentList = this.selectedAssignments[0];
  }

}
