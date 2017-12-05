import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PowerComponentComponent implements OnInit {

  constructor() { }
  thing;
  level = {};
  ngOnInit() {
  }
  onSubmit(){
    this.level = {num:''};
    this.thing = this.level['num'];
    
  }

}