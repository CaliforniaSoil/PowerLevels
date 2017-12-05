import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sstwo',
  templateUrl: './sstwo.component.html',
  styleUrls: ['./sstwo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SstwoComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
