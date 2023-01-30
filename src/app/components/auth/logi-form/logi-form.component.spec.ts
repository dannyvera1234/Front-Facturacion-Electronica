import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiFormComponent } from './logi-form.component';

describe('LogiFormComponent', () => {
  let component: LogiFormComponent;
  let fixture: ComponentFixture<LogiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
