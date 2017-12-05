import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-super-saiyan-component',
  templateUrl: './super-saiyan-component.component.html',
  styleUrls: ['./super-saiyan-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyanComponentComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
