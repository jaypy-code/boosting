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
  public ChangePrice: number = 0
  public get LastPrice() {



    return this.OrderPrice + (this.ChangePrice * this.OrderPrice) / 100
  }
  constructor() { }



  orderOptions(data: boolean, rule) {
    if (typeof data == 'boolean') {


      if (data) {
        this.ChangePrice += rule
      } else {
        this.ChangePrice += rule * -1
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
