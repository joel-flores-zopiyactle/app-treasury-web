import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styles: [
  ]
})
export class SingInComponent implements OnInit {

  singInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  showSpinners:boolean = false
  messageError = "";

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  singIn() {

    this.showSpinners = true
    this.authService.singIn(this.singInForm.value).subscribe(data => {
      if(data.token) {
        this.showSpinners = false;
        localStorage.setItem('token-app', data.token);

        this.authService.showSingOut.emit(true)
        this.router.navigate(['/home'])

      } else {
        this.showSpinners = false;
        this.messageError = data.data;
        console.log(data);

      }
    }, err => {
      this.showSpinners = false;
      this.messageError = "Hubo un error al Iniciar sesión. Intente de nuevo!"
    })

  }
}
