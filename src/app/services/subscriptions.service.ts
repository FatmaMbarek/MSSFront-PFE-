import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  private baseUrl = 'http://98.66.226.14/api';
  private baseUrlOpenbank = 'https://openbank.stb.com.tn/';

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



  //#region  ma banque 

  GetExtraitCompte(token: string, ClientId: string, StartDate: any, EndDate: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    let body = {
      "ClientId": ClientId,
      "StartDate": StartDate,
      "EndDate": EndDate

    }


    return this.http.post('https://openbank.stb.com.tn/api/app/all/BankAccountStatement', JSON.stringify(body), httpOptions)
      .pipe(
        // retry(2),
        // map(this.extractData),
        catchError(this.handleError));
  }

  
  GetRIbIBAN(token: string, ClientId: any, StartDate: any, EndDate: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    let body = {
      "ClientId": ClientId,
      "StartDate": StartDate,
      "EndDate": EndDate

    }


    return this.http.post( 'https://openbank.stb.com.tn/api/app/all/getRibIbanFile', JSON.stringify(body), httpOptions)
      .pipe(
        // retry(2),
        // map(this.extractData),
        catchError(this.handleError));
  }


  GetListRapprochement(token: string,accountCode: string,StartDate: any,EndDate: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token,
        'Ocp-Apim-Subscription-Key' : 'b320a38c9aea45ed91fc0e6ca7872d05'


      })
    };
   
    let body= {
      "accountnumber":accountCode,
      "startdate":StartDate,
      "enddate":EndDate
   }


   
return this.http.post('https://openbank.stb.com.tn/api/app/all/v0/getReconciliationTransactions',JSON.stringify(body),httpOptions)


    //return this.http.post(environment.urlAllApp+'listeReceivedcheckOPB',JSON.stringify(body),httpOptions)
    .pipe(
      // retry(2),
      // map(this.extractData),
      catchError(this.handleError));
  }


  getTiersByIdDigital(token:any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token
      })
    };
    let body={
  }
    return this.http.post('https://openbank.stb.com.tn/api/app/Corporate/ListTiersByIdDigital',JSON.stringify(body), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }


  MinimalByRef(token: any, b: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    let body = {
      "referentiel": b,
      "currency": "999",
      "bank_id": "10"
    }
    return this.http.post('https://openbank.stb.com.tn/api/app/all/account/MinimalByRef/', JSON.stringify(body), httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError));
  }


  getDataByAccount(token: any, accountpk: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get('https://openbank.stb.com.tn/api/app/Corporate/getDataByCompte?accountpk=' + accountpk, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  
  globaltransactions(token: any, account: any, startday : any, endday : any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get('https://openbank.stb.com.tn/api/standard/mpay/global-transactions?account=' + account + "&startdate="+startday + "&enddate="+ endday, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  
  Raprochement(token: any, walletnumber: any, day : any ) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get('https://openbank.stb.com.tn/api/standard/mpay/Raprochement?receiver_number=' + walletnumber + "&filedate=" + day, httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }



  //#endregion


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

