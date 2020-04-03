import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dota-rank',
  templateUrl: './dota-rank.component.html',
  styleUrls: ['./dota-rank.component.scss']
})
export class DotaRankComponent implements OnInit {

  @Input() rank: number = 0;
  constructor() { }

  ngOnInit() {
  }

  getSRC(): string {
    let path = '/assets/images/';
    let rank = this.rank
    switch (true) {
      case (rank < 770):
        return path + 'herald.webp';

      case (770 <= rank && rank < 1560):
        return path + 'guardian.png';

      case (1560 <= rank && rank < 2520):
        return path + 'crusader.webp';

      case (2520 <= rank && rank < 3360):
        return path + 'archon.webp';

      case (3360 <= rank && rank < 4200):
        return path + 'legend.png';

      case (4200 <= rank && rank < 5040):
        return path + 'ancient.webp';

      case (5040 <= rank && rank < 6000):
        return path + 'divine.png';

      case (6000 <= rank):
        return path + 'immortal.webp';
      
      default:
        break;
    }
  }

}
