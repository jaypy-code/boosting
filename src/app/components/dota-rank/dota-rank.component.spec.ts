import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaRankComponent } from './dota-rank.component';

describe('DotaRankComponent', () => {
  let component: DotaRankComponent;
  let fixture: ComponentFixture<DotaRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
