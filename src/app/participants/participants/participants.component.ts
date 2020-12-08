import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from '../participants.service';
import {Observable} from 'rxjs';
import {Participant} from '../participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  private participants: Participant[] = [];

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit() {
    this.participantsService.getAll().subscribe(
      next => {
        this.participants = next;
      }
    );
  }

  getParticipants(): Observable<Participant[]> {
    return this.participantsService.getAll();
  }

}
