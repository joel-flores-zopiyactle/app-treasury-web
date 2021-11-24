import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  background:any = "";

  arrayPosts:any = [];

  constructor(private postService:PostService, private authService:AuthService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(data => {
      this.arrayPosts = data;
    })

    this.authService.showSingOut.emit(true);

    this.authService.chageBg.subscribe(data => {
      this.background = data
    })


  }

}
