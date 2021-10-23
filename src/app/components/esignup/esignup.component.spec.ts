import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsignupComponent } from './esignup.component';

describe('EsignupComponent', () => {
  let component: EsignupComponent;
  let fixture: ComponentFixture<EsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
