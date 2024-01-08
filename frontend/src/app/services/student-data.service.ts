import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  url = "https://dummyjson.com/users";


  // Constructor / Instance

  constructor(private http: HttpClient) { }


  getdata(limit: number = 10){
    return this.http.get(this.url + `?limit=${limit}`)
  }
  
}

