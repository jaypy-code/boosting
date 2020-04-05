import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

interface Option {
  label: string,
  description: string,
  rule: Number
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
      description: '+15%',
      rule: +15
    },
    {
      label: 'قهرمانان خاص',
      description: '+25%',
      rule: +25
    },
    {
      label: 'سفارش اولویت (سرعت 2 برابر)',
      description: '+25%',
      rule: +25
    }
  ];

  @Input() Price: number = 10000
  public OrderPrice: number
  constructor() { }



  orderOptions(data: boolean, rule) {
    if (typeof data == 'boolean') {

      const price = (rule * this.Price) / 100
      if (data) {
        this.OrderPrice += price
      } else {
        this.OrderPrice += price * -1
      }

    }
  }

  ngOnChanges(changes: SimpleChanges) {

    this.OrderPrice = (changes.Price.currentValue);
  

  }
  ngOnInit() {
    this.OrderPrice = this.Price
  }


}
