import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: string = ""
  names: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  handleSave(){
    if(this.firstname){
      this.names.push(this.firstname)
      this.firstname = ""
    }
  }

  handleDelete(index: number){
    if(index >= 0){
     this.names.splice(index,1)
    }
  }

}
