import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../_services/auth.service';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {}

  constructor(private authService: AuthService, public helperService: HelperService, public home:HomeComponent) { }

  ngOnInit(): void {

  }

  register(){
    console.log(this.model)
    this.authService.register(this.model).subscribe(
      () => {
        console.log("registration successfull")
      },
       err => {
        console.log(err)
       })
  }

  cancel(){
    console.log("cancelled")
    this.helperService.registerMode = false
  }

}
