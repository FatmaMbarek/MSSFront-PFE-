import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibibanComponent } from './ribiban.component';

describe('RibibanComponent', () => {
  let component: RibibanComponent;
  let fixture: ComponentFixture<RibibanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibibanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RibibanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
