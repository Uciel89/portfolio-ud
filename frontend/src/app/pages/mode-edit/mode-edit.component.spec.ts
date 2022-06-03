import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeEditComponent } from './mode-edit.component';

describe('ModeEditComponent', () => {
  let component: ModeEditComponent;
  let fixture: ComponentFixture<ModeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
