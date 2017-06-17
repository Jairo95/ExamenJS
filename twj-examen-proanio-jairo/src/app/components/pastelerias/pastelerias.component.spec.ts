import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteleriasComponent } from './pastelerias.component';

describe('PasteleriasComponent', () => {
  let component: PasteleriasComponent;
  let fixture: ComponentFixture<PasteleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
