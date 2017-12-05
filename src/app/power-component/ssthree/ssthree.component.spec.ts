import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsthreeComponent } from './ssthree.component';

describe('SsthreeComponent', () => {
  let component: SsthreeComponent;
  let fixture: ComponentFixture<SsthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
