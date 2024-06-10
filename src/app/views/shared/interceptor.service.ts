import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService) {

  }
  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {


      const token = this.cookieService.get('auth_token');
      const authReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer '+token)
      });
      console.log(authReq)
      // Pass the cloned request instead of the original request to the next handler
      return next.handle(authReq);
  }
} 