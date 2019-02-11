import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTGCardComponent } from './mtgcard.component';

describe('MTGCardComponent', () => {
  let component: MTGCardComponent;
  let fixture: ComponentFixture<MTGCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTGCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTGCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
