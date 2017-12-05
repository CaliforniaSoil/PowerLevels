import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-saiyan-component',
  templateUrl: './saiyan-component.component.html',
  styleUrls: ['./saiyan-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaiyanComponentComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
