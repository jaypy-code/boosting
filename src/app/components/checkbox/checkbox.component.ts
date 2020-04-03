import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() id: string = 'checkbox-' + Date.now();
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() checked: boolean = false;
  @Output() change = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    let value = event.target.checked;
    this.checked = value;
    this.change.emit(value);
  }
}
