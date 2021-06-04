import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  
  URL = "https://reqres.in/api/users/"

  constructor(private http: HttpClient) { }

  getDetails(id){
    return this.http.get(this.URL + id);
  }
}
