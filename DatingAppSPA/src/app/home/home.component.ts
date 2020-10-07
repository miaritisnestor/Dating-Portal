import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelperService } from '../_services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public helperService: HelperService) { }

  ngOnInit(): void {
  
  }

  registerToggle(){
    this.helperService.registerMode = true
  }


}
