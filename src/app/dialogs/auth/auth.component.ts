import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input() opened: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  public mode: string = 'login';
  constructor() { }

  ngOnInit() {
  }

  exit() {
    this.close.emit(false);
  }
}
