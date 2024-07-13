import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MpayService } from 'src/app/services/mpay.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {
  FormLogin = {
    login: "",
    password: ""
  };

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private mpayServices: MpayService
  ) { }

  ngOnInit(): void {
    this.cookieService.delete('auth_token');
    this.setupPasswordToggle();
  }

  login(): void {
    console.log(this.FormLogin);
    if (this.FormLogin.login == "khaled" && this.FormLogin.password == "Khaled@2024+") {
      this.mpayServices.Authentifiaction(this.FormLogin.login, this.FormLogin.password)
        .subscribe(data => {
          console.log(data);
          let tokenMerchant: any;
          tokenMerchant = data;
          localStorage.setItem("token", tokenMerchant.body.access_token);
          this.cookieService.set('auth_token', tokenMerchant.body.access_token);
          this.router.navigate(['/analytics-dashboard']);
        });
    } else {
      Swal.fire({
        title: 'Error !!',
        text: 'Login ou Mot de passe incorrecte',
        icon: 'error',
      });
    }
  }

  setupPasswordToggle(): void {
    const togglePassword = document.querySelector('#togglePassword') as HTMLElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.innerHTML = type === 'password' ?
                `<svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M11.9902 3.88184H12C13.3951 3.88184 14.7512 4.21657 16 4.84567L12.7415 8.13491C12.5073 8.09553 12.2537 8.066 12 8.066C9.8439 8.066 8.09756 9.82827 8.09756 12.004C8.09756 12.26 8.12683 12.516 8.16585 12.7523L4.5561 16.3949C3.58049 15.2529 2.73171 13.8736 2.05854 12.2895C1.98049 12.1123 1.98049 11.8957 2.05854 11.7087C4.14634 6.80583 7.86341 3.88184 11.9902 3.88184ZM18.4293 6.54985C19.8439 7.8494 21.0439 9.60183 21.9415 11.7087C22.0195 11.8957 22.0195 12.1123 21.9415 12.2895C19.8537 17.1924 16.1366 20.1262 12 20.1262H11.9902C10.1073 20.1262 8.30244 19.506 6.71219 18.3738L9.80488 15.2529C10.4293 15.6753 11.1902 15.9322 12 15.9322C14.1463 15.9322 15.8927 14.1699 15.8927 12.004C15.8927 11.1869 15.639 10.419 15.2195 9.78889L18.4293 6.54985Z" fill="currentColor"></path>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4296 6.54952L20.2052 4.75771C20.4979 4.4722 20.4979 3.99964 20.2052 3.71413C19.9223 3.42862 19.4637 3.42862 19.1711 3.71413L18.254 4.63957C18.2442 4.65926 18.2247 4.67895 18.2052 4.69864C18.1954 4.71833 18.1759 4.73802 18.1564 4.75771L17.2881 5.63491L14.1954 8.7558L3.72715 19.3186L3.69789 19.358C3.50276 19.6435 3.54179 20.0383 3.78569 20.2844C3.92228 20.4311 4.1174 20.5 4.30276 20.5C4.48813 20.5 4.6735 20.4311 4.81984 20.2844L15.2198 9.78855L18.4296 6.54952ZM12.0004 14.4555C13.337 14.4555 14.4297 13.3529 14.4297 12.0041C14.4297 11.5906 14.3321 11.1968 14.1565 10.8621L10.8687 14.1798C11.2004 14.3571 11.5907 14.4555 12.0004 14.4555Z" fill="currentColor"></path>                </svg>` :
                `<svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7366 6.04606C19.4439 7.36388 20.8976 9.29455 21.9415 11.7091C22.0195 11.8924 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8924 2.05854 11.7091C4.14634 6.87903 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12Z" fill="currentColor"></path>
                </svg>`;
        });
    }
}

}
