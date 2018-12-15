import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() textLabel;
  @Output() clickChildComponentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  returnData(textLabel){
    this.clickChildComponentEvent.emit(textLabel);
  }
}
