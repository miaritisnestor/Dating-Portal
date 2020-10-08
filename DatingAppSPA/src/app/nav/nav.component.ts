import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../_services/auth.service';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {};

  constructor(private authService: AuthService, public home:HomeComponent, public helper:HelperService) { }

  ngOnInit(): void {

  }

  login(){
    this.authService.login(this.model).subscribe(
      res=>{
        console.log("Successfully logged in.");
      }
      ,err=>{
        console.log(err);
      });
  }

  loggedIn(){
    const token = localStorage.getItem('token')
    // if token value is not null then return true
    return !!token
  }

  loggedOut(){
    localStorage.removeItem('token')
    console.log("logged out")
  }

  

}
