import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosNosotrosComponent } from './tabla-datos-nosotros.component';

describe('TablaDatosNosotrosComponent', () => {
  let component: TablaDatosNosotrosComponent;
  let fixture: ComponentFixture<TablaDatosNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDatosNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDatosNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
