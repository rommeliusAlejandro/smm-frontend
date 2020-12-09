import {Component, Input, OnInit} from '@angular/core';
import {Program} from '../program';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Input()
  program: Program = new Program();

  constructor() { }

  ngOnInit() {

  }

  updateProgram() {

  }

}
