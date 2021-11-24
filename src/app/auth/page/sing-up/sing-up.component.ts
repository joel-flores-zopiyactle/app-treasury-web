import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styles: [
  ]
})
export class SingUpComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  showSpinners:boolean = false
  messageError = "";


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  singUp() {

    //console.log(this.registerForm.value);
    this.showSpinners = true

    this.authService.singUp(this.registerForm.value).subscribe(data => {

      if(data) {
        this.showSpinners = false
        console.log('Usuario registrado');
        this.router.navigate(['/auth/sing-in'])
      }

    }, err => {
      console.log(err);
      this.showSpinners = false;
      this.messageError = "Hubo un error al crear su cuenta, verifique sus datos";

    })

  }

}
