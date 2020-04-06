import { Component, OnInit } from '@angular/core';
import { RangeManager } from '../../core/RangeManager';
declare var particlesJS: any;

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.scss']
})
export class DotaComponent implements OnInit {

  public min: number = 1;
  public max: number = 200;
  public price: number = 0;

  public selectedTab = 0
  public tabs = [{
    name: "افزایش MMR",
    image: "/assets/images/rank-boosting.png"
    

  }]
  public prices = [
    {
      min: 1,
      max: 101,
      price: 1900
    },


    {

      min: 101,
      max: 6500,
      price: 2900
    },


  ]
  constructor() { }

  ngOnInit() {
    particlesJS.load("background", "assets/particlesjs-config.json");
  
  
    const range = new RangeManager(this.prices, this.min, this.max)
    this.price = range.price

  }

  Seter($event) {
    this.price = 0
    this.set('min', $event[0]);
    this.set('max', $event[1]);


    
    const range = new RangeManager(this.prices, this.min, this.max)


    console.log(this.prices)
    console.log(range.price)

    this.price = range.price




  }

  find() {










  }



  set(name = '', value) {
    if (typeof value == 'object') return;
    this[name] = value;

  }

}
