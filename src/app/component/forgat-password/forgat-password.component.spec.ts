import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgatPasswordComponent } from './forgat-password.component';

describe('ForgatPasswordComponent', () => {
  let component: ForgatPasswordComponent;
  let fixture: ComponentFixture<ForgatPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgatPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgatPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
