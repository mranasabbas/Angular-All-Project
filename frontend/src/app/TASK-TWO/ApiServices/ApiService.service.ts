import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class apiService{

    constructor(private http: HttpClient){}

    // Api Connection to Frontend

    apiURL = 'http://localhost:6900/user'


    // Getting Data From API
    
    getData(){
        return this.http.get(this.apiURL)
    }
    
    // Creating User Data In API

    createData(data:any):Observable<any>{
        return this.http.post(`${this.apiURL}`, data)
    }

    // Deleting User From API

    deleteData(id:any):Observable<any>{
        let ids = id;
        return this.http.delete(`${this.apiURL}/${ids}`);
    }

    // Deleting User From API

    getSingleUser(id:any):Observable<any>{
        let ids = id;
        return this.http.get(`${this.apiURL}/${ids}`);
    }

    // Updating User

    updateUser(data:any, id:any) {
        let ids = id;
        return this.http.put(`${this.apiURL}/${ids}`, data)
    }
        
}