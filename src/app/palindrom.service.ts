import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromService {

  constructor(private http: HttpClient) { }


  public addNewData(data) {
    return this.http.post("http://localhost:8080/palindrome/addUser", data);
  }

  public getAllData() {
    return this.http.get("http://localhost:8080/palindrome/getUsers");
  }

}
