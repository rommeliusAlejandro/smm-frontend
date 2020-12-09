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
}
