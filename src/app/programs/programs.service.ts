import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Program} from './program';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private programsUrl = `${environment.api_host}/programs`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Program[]> {
    return this.http.get<Program[]>(this.programsUrl)
      .pipe(catchError(err => throwError(err)));
  }

  create(input: Program): Observable<Program> {
    return this.http.post<Program>(this.programsUrl, input)
      .pipe(catchError(err => throwError(err)));
  }

  update(id: string, program: Program): Observable<Program> {
    return this.http.put<Program>(`${this.programsUrl}/${id}`, { attributes: {
      weeks: program.weeks,
        year: program.year,
        month: program.month
      }})
      .pipe(catchError(err => throwError(err)));
  }
}
