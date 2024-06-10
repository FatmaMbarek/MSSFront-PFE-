import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaissementArgentComponent } from './encaissement-argent.component';

describe('EncaissementArgentComponent', () => {
  let component: EncaissementArgentComponent;
  let fixture: ComponentFixture<EncaissementArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncaissementArgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncaissementArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
