import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-human-component',
  templateUrl: './human-component.component.html',
  styleUrls: ['./human-component.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HumanComponentComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
