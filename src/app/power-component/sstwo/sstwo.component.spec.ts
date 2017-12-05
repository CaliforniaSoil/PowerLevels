import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SstwoComponent } from './sstwo.component';

describe('SstwoComponent', () => {
  let component: SstwoComponent;
  let fixture: ComponentFixture<SstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
