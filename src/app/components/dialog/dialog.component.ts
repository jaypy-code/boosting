import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() opened: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  exit() {
    this.close.emit(false);
  }
}
