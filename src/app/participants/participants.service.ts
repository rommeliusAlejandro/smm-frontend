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

  findCandidates(month: number, gender: string, year: number): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.participantsUrl}/candidates?year=${year}&month=${month}&gender=${gender}`)
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

  delete(id: string): Observable<Participant> {
    return this.http.delete<Participant>(`${this.participantsUrl}/${id}`)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }

  releaseParticipants(): Observable<number> {
    return this.http.post<number>(`${this.participantsUrl}/release`, {})
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }

  create(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.participantsUrl}`, participant)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }

  logHistory(id: string, log: History): Observable<History> {
    return this.http.post<History>(`${this.participantsUrl}/${id}/logHistory`, log)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }

  loadHistory(participantId: string): Observable<History[]> {
    return this.http.get<History[]>(`${this.participantsUrl}/${participantId}/history`)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }

  reserve(id: string): Observable<Participant> {
    return this.http.put<Participant>(`${this.participantsUrl}/${id}/reserve`, null)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }
}
