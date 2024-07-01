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
    this.cookieService.delete('auth_token')
  }

  login(): void {
    // Set a fake token for testing
    this.cookieService.set('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF5ZVp2UzBtUjAvSXQreUhsZlR2WFRJMmZIRHlBaksxSWY0RXl5VUwrdXo4Z2dyaHBjSVhjRVVEMkJmVENLWUx5MGRxbVBNcnMxVWFVY0xkcWFleEJWQ3c3NTYzREdFUGgydVRqMisvN0toVHVtUS9vcGJQOUh6L3ZRWk54QVZBTGhyR1pRUWpISnNHWWEyRXFiSXdCMUpNcHlXdVFXK3JmcS9nVFNsV3N3bz0iLCJwYXNzd29yZCI6ImJ5b2pZdm1tbnJSbWZaUlJUbGVuQS91aURpSEdHWWdCeU8wTjZRSTFjandsQ0NGWS9wdTVLVE1ZOU5aUjFCVUxvS3hHN2ZCZENLMzdlb01zVENhaExEUDRoeG0vQVZzd2RRcFM3TGRndzJzamptYjZNVTJRRjBxK3ZkQXBSSUZHMitSQ0VMU29pNFhQL3Aza2hUeWtaZUdpRjlCREEweWMzc290MUZZT2ZIaz0iLCJqdGkiOiI5YjcyOWUxZi1hNDVkLTQzOTItYjM4NS1iMjM5Njg4MTc5YjAiLCJleHAiOjE3MDc3NDcyNDYsImlzcyI6ImFzZz1ocHJvZ2hlbHAuY29tIiwiYXVkIjoiYXNnPWhwcm9naGVscC5jb20ifQ.OeTpcMlJ1eI3nnBA3AwSGKoRTXgSKUKowEjU8KLWQqs');
    this.router.navigate(['/analytics-dashboard']);
  }

}
