import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Admin } from 'src/Models/Admin';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  login(admin: Admin): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:3000/admin/login', admin, {
        headers: options
      })
      .pipe(catchError(this.handleError));
  }

  getCategories(): Observable<any> {
    return this.http
      .get('http://localhost:3000/category/getCategories')
      .pipe(catchError(this.handleError));
  }

  addType(body: any): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:3000/specialty/addType', body, {
        headers: options
      })
      .pipe(catchError(this.handleError));
  }

  getWines(): Observable<any> {
    return this.http
      .get('http://localhost:3000/wine/getWines')
      .pipe(catchError(this.handleError));
  }

  addWineType(body: any): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:3000/wine/addWineType', body, {
        headers: options
      })
      .pipe(catchError(this.handleError));
  }

  getTypes(body: any): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:3000/specialty/getTypes', body, {
        headers: options
      })
      .pipe(catchError(this.handleError));
  }

  clearFoodType(body: any): Observable<any> {
    return this.http
      .put(`http://localhost:3000/specialty/clearType/`, body)
      .pipe(catchError(this.handleError));
  }

  clearWineType(body: any): Observable<any> {
    return this.http
      .put('http://localhost:3000/wine/clearWineType', body)
      .pipe(catchError(this.handleError));
  }

  updateFoodType(body: any): Observable<any> {
    return this.http
      .put('http://localhost:3000/type/updateType', body)
      .pipe(catchError(this.handleError));
  }

  updateWineType(body: any): Observable<any> {
    return this.http
      .put('http://localhost:3000/wine/updateWineType', body)
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
