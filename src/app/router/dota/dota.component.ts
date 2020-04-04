import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.scss']
})
export class DotaComponent implements OnInit {

  public min: number = 300;
  public max: number = 2000;

  public tabs = [{
    name : "افزایش MMR",
    image : "/assets/images/rank-boosting.png"

  }]
  constructor() { }

  ngOnInit() {
    particlesJS.load("background", "assets/particlesjs-config.json");
  }

  set(name = '', value) {
    if (typeof value == 'object') return;
    this[name] = value;

  }

}
