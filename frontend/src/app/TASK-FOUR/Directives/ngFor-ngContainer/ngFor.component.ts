import { Component } from "@angular/core";

@Component({
    selector: 'app-For',
    templateUrl: './ngFor.component.html'
})

export class NGForComponent {


    public UserList = [
        {
            id: 1, 
            name: "User One",
            age: 23,
            gender: 'male'
        },
        {
            id: 2, 
            name: "User Two",
            age: 41,
            gender: 'female'
        },
        {
            id:3, 
            name: "User Three",
            age: 59,
            gender: 'male'
    },
        {
            id: 4, 
            name: "User Four",
            age: 21,
            gender: 'female'
        },
        {
            id: 5, 
            name: "User Five",
            age: 43,
            gender: 'male'
        },
      ]
      
    isLoader: boolean = true;

      constructor(){
       setTimeout(() => {
        this.isLoader = false
       }, 4000); 
      }


}