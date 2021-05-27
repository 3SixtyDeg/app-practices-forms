import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  person = {
    gender: 'F',
    notifications: true
  }

  public terms: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
