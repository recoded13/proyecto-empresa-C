import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmleadoHijocComponent } from './emleado-hijoc.component';

describe('EmleadoHijocComponent', () => {
  let component: EmleadoHijocComponent;
  let fixture: ComponentFixture<EmleadoHijocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmleadoHijocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmleadoHijocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
