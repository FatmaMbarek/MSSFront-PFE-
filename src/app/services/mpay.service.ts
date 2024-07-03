import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, retry, throwError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MpayService {
  private  url= 'https://mpaytest.clictopay.com/relaisMpaymentDev/api/Service';
  private baseUrl = 'https://openbank.stb.com.tn/';
private token : any;

private subscription = 'feff51e5a77849e9a4f8c867d14fda8f'
  constructor(private http: HttpClient , private cookieService: CookieService) {
    // this.token = this.cookieService.get('auth_token');
    // console.log("-----------------")
    console.log(this.token)
   }


  getSolde(b : any , token:any) :Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token,
        'Ocp-Apim-Subscription-Key':this.subscription

      })
    };
    let body=b
    return this.http.post(this.baseUrl + "api/wallet/getsolde",JSON.stringify(body), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }  
  
  
  getHistorique(b : any, token:any) :Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token,
        'Ocp-Apim-Subscription-Key':this.subscription

      })
    };
    let body=b
    return this.http.post(this.baseUrl + "api/wallet/GetHistorique",JSON.stringify(body), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  
  getHistoriqueMerchant(b : any, token:any) :Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token,
        'Ocp-Apim-Subscription-Key':this.subscription

      })
    };
    let body=b
    return this.http.post(this.baseUrl + "api/wallet/GetMerchantHistory",JSON.stringify(body), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }



  GetWalletInformations(b : any, token:any) :Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token,
        'Ocp-Apim-Subscription-Key':this.subscription

      })
    };
    let body=b
    return this.http.post(this.baseUrl + "api/wallet/GetWalletInformations",JSON.stringify(body), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }


  getQrCode(b : any, token:any) :Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':'Bearer '+token,
        'Ocp-Apim-Subscription-Key':this.subscription
      })
    };
    let body=b
    return this.http.post(this.baseUrl + "api/wallet/getQrCode",JSON.stringify(body), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  

  Authentifiaction(a: string,b: string) {

    const body = new URLSearchParams();
    body.set('username', "PLATEFORME_MSS@stbdigital.tn");
    body.set('password', "DSt355*vH");
    // body.set('username', a);
    // body.set('password', b);
    body.set('grant_type', 'password');
    body.set('scope', 'openid 8d083a5a-32f1-42b1-9f5f-0444da5b2889');
    body.set('client_id', '8d083a5a-32f1-42b1-9f5f-0444da5b2889');
    body.set('response_type', 'token id_token');
    return this.http.post<any>('https://stbclientb2c.b2clogin.com/stbclientb2c.onmicrosoft.com/b2c_1_signin_ropc/oauth2/v2.0/token',body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }),
      withCredentials:false,
      observe: 'response',
      reportProgress: true
    }).pipe(
      // retry(1),

      catchError(this.handleError)
    );
  }

   
  // Authentifiaction(a: string,b: string) {

  //   const body = new URLSearchParams();
  //   body.set('username', "Dave_PROD");
  //   body.set('password', "hKWL6MzZ3n5@yxW563BcAibAKCh");
  //   body.set('grant_type', 'password');
  //   body.set('scope', 'openid 8d083a5a-32f1-42b1-9f5f-0444da5b2889');
  //   body.set('client_id', '8d083a5a-32f1-42b1-9f5f-0444da5b2889');
  //   body.set('response_type', 'token id_token');
  //   return this.http.post<any>(this.baseUrl + 'authentication/token',body.toString(), {
  //        headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  //     }),
  //     withCredentials:false,
  //     observe: 'response',
  //     reportProgress: true
  //   }).pipe(
  //     timeout(10000), // Set timeout for 20 seconds

  //     // retry(1),

  //     catchError(this.handleError)
  //   );
  // }
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

