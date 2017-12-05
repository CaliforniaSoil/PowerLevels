import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ssfour',
  templateUrl: './ssfour.component.html',
  styleUrls: ['./ssfour.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SsfourComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
