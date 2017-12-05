import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ssthree',
  templateUrl: './ssthree.component.html',
  styleUrls: ['./ssthree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SsthreeComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
