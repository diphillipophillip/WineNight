import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/Models/User';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    const options = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http
      .post('http://localhost:3000/user/register', user, {
        headers: options
      })
      .pipe(catchError(this.handleError));
  }

  login(user: User): Observable<any> {
    const options = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http
      .post('http://localhost:3000/user/login', user, {
        headers: options
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg: string = '';
    if (err.error instanceof Error) {
      console.log('An Error has occurred', err.error.message);
      errMsg = err.error.message;
    } else {
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(errMsg);
  }
}
