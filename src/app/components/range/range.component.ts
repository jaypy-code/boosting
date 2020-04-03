import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  @Input() value: number[] = [0, 0];
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() step: number = 0;
  @Output() chnage = new EventEmitter<number[]>();
  public options: Options = {
    floor: this.min,
    ceil: this.max,
    step: this.step
  };
  constructor() { }

  ngOnInit() {
    this.options = {
      floor: this.min,
      ceil: this.max,
      step: this.step
    }    
  }

  emit() {
    this.chnage.emit(this.value);
  }
}
