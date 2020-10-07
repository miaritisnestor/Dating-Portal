import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public registerMode = false
  divColor = "red"
  

  constructor() { }
}
