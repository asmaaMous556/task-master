import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name:string;
token;
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.getName();
  }
getName(){
  this.token= this.auth.getToken();
 this.token=JSON.parse(this.token);
 this.name=this.token.name;
 
}
}
