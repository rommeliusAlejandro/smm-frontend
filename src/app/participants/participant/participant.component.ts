import {Component, Input, OnInit} from '@angular/core';
import {Gender, Participant} from '../participant';
import {SelectItem} from 'primeng/api';

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

  constructor() { }

  ngOnInit() {

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

  addHistory() {

  }
}
