import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // Set a fake token for testing
    this.cookieService.set('auth_token', 'test_token');
    this.router.navigate(['/analytics-dashboard']);
  }

}
