import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }
  callMyHero(code) {
    try {
      return this.http.post(`http://localhost:8000/callMyHero`, {
        phoneCode: code
      }, this.httpOptions)
    } catch (err) {
      console.error(err);
    }
  }
}
