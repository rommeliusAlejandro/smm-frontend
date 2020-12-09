import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Participant} from './participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private participantsUrl = `${environment.api_host}/participants`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.participantsUrl)
      .pipe(catchError(err => throwError(err)));
  }

  update(participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(`${this.participantsUrl}/${participant.id}`, participant)
      .pipe(catchError(err => {
        console.error(err);
        return throwError(err);
      }));
  }
}
