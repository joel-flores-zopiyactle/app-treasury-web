import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://api-user-app-2021.herokuapp.com/api/1.0/user';
  //private showSingOut:boolean = false;
  @Output() showSingOut = new EventEmitter<boolean>();
  @Output() chageBg = new EventEmitter<string>();

  constructor(private http:HttpClient) { }

  singUp(data:any):Observable<any> {
    return this.http.post(`${this.url}/singup`, data)
  }

  singIn(data: any):Observable<any> {
    return this.http.post(`${this.url}/singin`, data);
  }

}
