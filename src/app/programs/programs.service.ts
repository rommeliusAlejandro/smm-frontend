import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Program} from './program';
import {MonthlyProgram} from '../monthlyPrograms/monthly-program';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private programsUrl = `${environment.api_host}/programs`;
  private scheduleCreateUrl = `${environment.api_host}/schedule/create`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Program[]> {
    return this.http.get<Program[]>(this.programsUrl)
      .pipe(catchError(err => throwError(err)));
  }

  findOne(programId: string): Observable<Program> {
    return this.http.get<Program>(`${this.programsUrl}/${programId}`)
      .pipe(catchError(err => throwError(err)));
  }

  create(input: Program): Observable<Program> {
    return this.http.post<Program>(this.programsUrl, input)
      .pipe(catchError(err => throwError(err)));
  }

  update(id: string, program: Program): Observable<Program> {
    return this.http.put<Program>(`${this.programsUrl}/${id}`, {
      attributes: {
        weeks: program.weeks,
        year: program.year,
        month: program.month
      }
    })
      .pipe(catchError(err => throwError(err)));
  }

  createSchedule(month: number, programId: string): Observable<MonthlyProgram> {
    return this.http.post<MonthlyProgram>(
      `${this.scheduleCreateUrl}/${month}`,
      { programId }
    ).pipe(catchError(err => throwError(err)));
  }
}
