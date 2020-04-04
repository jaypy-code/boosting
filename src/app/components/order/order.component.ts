import { Component, OnInit, Input } from '@angular/core';

interface Option {
  label: string,
  description: string
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() options: Option[] = [
    {
      label: 'استریمینگ',
      description: '+15%'
    },
    {
      label: 'قهرمانان خاص',
      description: '+25%'
    },
    {
      label: 'سفارش اولویت (سرعت 2 برابر)',
      description: '+25%'
    }
  ];

  @Input() Price: Number = 0
  constructor() { }

  ngOnInit() {
  }

}
