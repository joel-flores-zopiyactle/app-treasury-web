import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  showSingOut:boolean = false;
  constructor(private router:Router, private authService:AuthService) { }



  ngOnInit(): void {
     this.authService.showSingOut.subscribe(data => {
      this.showSingOut = data
    });
  }

  singOut() {
    if (confirm('Are you sure you want out?')) {

      this.showSingOut = false

      localStorage.removeItem('token-app');
      this.router.navigate(['/auth/sing-in']);
    }
  }

}
