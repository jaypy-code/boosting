import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() label: string = '';
  @Input() labels: string[] = [];
  @Input() selected: string = '';
  @Output() change = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  select(label: string) {
    this.selected = label;
    this.change.emit(label);
  }

}
