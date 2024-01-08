import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class BlogService{

    apiURL = "https://api.slingacademy.com/v1/sample-data/blog-posts";


    // Constructor / Instance
  
    constructor(
      private http: HttpClient
      ) {}  

    getPostData(){
      return this.http.get(this.apiURL)
    }
    
}