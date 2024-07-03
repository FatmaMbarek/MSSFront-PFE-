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
  login :"",
  password :""
}
  constructor(private cookieService: CookieService, private router: Router, private mpayServices : MpayService ) { }

  ngOnInit(): void {
    localStorage.clear()
    this.cookieService.delete('auth_token')
  }

  login(): void {
console.log(this.FormLogin)


    if (this.FormLogin.login.toLowerCase() == "khaled" && this.FormLogin.password == "Khaled@2024+"){
      this.mpayServices.Authentifiaction(this.FormLogin.login,this.FormLogin.password)
      .subscribe(data => {
        console.log(data)
        let tokenMerchant : any
        tokenMerchant = data
       localStorage.setItem("token",tokenMerchant.body.access_token)
        this.cookieService.set('auth_token', tokenMerchant.body.access_token);
        this.router.navigate(['/solde']);
      })

    }
    else {
  

      Swal.fire({
        title: 'Error !!',
        text: 'Login ou Mot de passe incorrecte',
        icon: 'error',
      })
    }
    // Set a fake token for testing
  }

}
