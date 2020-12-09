import { Component, OnInit } from '@angular/core';
import {ProgramsService} from '../programs.service';
import {Program} from '../program';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programs: Program[] = [];

  selectedProgram: Program[] = null;
  program: Program = null;

  constructor(private programsService: ProgramsService) { }

  ngOnInit() {

    this.programsService.getAll().subscribe(
      next => {
        this.programs = next;
      }
    );
  }

  setProgram() {
    this.program = this.selectedProgram[0];
  }

  addProgram() {

  }

}
