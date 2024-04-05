import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThTableIconTextPrincipalComponent } from './th-table-icon-text-principal.component';

describe('ThTableIconTextPrincipalComponent', () => {
  let component: ThTableIconTextPrincipalComponent;
  let fixture: ComponentFixture<ThTableIconTextPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThTableIconTextPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThTableIconTextPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
