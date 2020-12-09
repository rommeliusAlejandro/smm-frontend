import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {History, Participant} from './participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private participantsUrl = `${environment.api_host}/participants`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.participantsUrl)
      .pipe(catchError(err => throwError(err)));
  }

  update(id: string, attributes: any): Observable<Participant> {
    return this.http.put<Participant>(`${this.participantsUrl}/${id}`, {attributes})
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }

  logHistory(id: string, log: History): Observable<Participant> {
    return this.http.put<Participant>(`${this.participantsUrl}/${id}/logHistory`, log)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }
}
