import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "https://reqres.in/api/users?page="

  constructor(private http: HttpClient) { }

  getUsers(page){
    return this.http.get(this.URL+page);
  }
}
