import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-change-bg',
  templateUrl: './change-bg.component.html',
  styles: [
  ]
})
export class ChangeBgComponent implements OnInit {

  changeBackground = new FormGroup({
    background: new FormControl('#000'),
  });

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  cambiarColorFondos(): void {
    //console.log(this.changeBackground.value.background);

    this.authService.chageBg.emit(this.changeBackground.value.background)
  }

}
