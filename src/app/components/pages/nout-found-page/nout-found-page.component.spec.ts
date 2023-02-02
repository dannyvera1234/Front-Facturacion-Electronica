import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutFoundPageComponent } from './nout-found-page.component';

describe('NoutFoundPageComponent', () => {
  let component: NoutFoundPageComponent;
  let fixture: ComponentFixture<NoutFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoutFoundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoutFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
