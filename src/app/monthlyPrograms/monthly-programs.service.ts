import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {MonthlyProgram} from './monthly-program';

@Injectable({
  providedIn: 'root'
})
export class MonthlyProgramsService {

  private monthlyProgramsUrl = `${environment.api_host}/monthlyProgram`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<MonthlyProgram[]> {
    return this.http.get<MonthlyProgram[]>(this.monthlyProgramsUrl)
      .pipe(catchError(err => throwError(err)));
  }

  update(id: string, monthlyProgram: any): Observable<MonthlyProgram> {
    return this.http.put<MonthlyProgram>(`${this.monthlyProgramsUrl}/${id}`, monthlyProgram)
      .pipe(
        map(output => {
          return output;
        }),
        catchError(err => {
          return throwError(err);
        }));
  }
}
