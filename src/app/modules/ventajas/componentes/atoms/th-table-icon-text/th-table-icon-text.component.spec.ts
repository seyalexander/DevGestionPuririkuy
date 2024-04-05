import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThTableIconTextComponent } from './th-table-icon-text.component';

describe('ThTableIconTextComponent', () => {
  let component: ThTableIconTextComponent;
  let fixture: ComponentFixture<ThTableIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThTableIconTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThTableIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
