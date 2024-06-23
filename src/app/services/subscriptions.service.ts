import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  private baseUrl = 'http://localhost:8004/api';

  constructor(private http: HttpClient) { }


  getPacks() :Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json'
      })
    };
    return this.http.get(this.baseUrl + "/Pack", httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // Log to console or send to remote logging infrastructure
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

