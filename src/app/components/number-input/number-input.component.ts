import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() label: string = '';
  @Output() change = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  emit() {        
    this.change.emit(this.value);
  }

  add() {
    if (this.value + this.step <= this.max) this.value += this.step;
    this.emit();
  }

  less() {
    if (this.value - this.step >= this.min) this.value -= this.step;
    this.emit();
  }

  keyEvent(event) {
    if(event.keyCode == 38) this.add();
    if(event.keyCode == 40) this.less();
  }
}
