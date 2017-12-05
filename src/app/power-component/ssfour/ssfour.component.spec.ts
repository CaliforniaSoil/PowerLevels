import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsfourComponent } from './ssfour.component';

describe('SsfourComponent', () => {
  let component: SsfourComponent;
  let fixture: ComponentFixture<SsfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
