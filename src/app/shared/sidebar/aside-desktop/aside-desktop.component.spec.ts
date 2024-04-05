import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDesktopComponent } from './aside-desktop.component';

describe('AsideDesktopComponent', () => {
  let component: AsideDesktopComponent;
  let fixture: ComponentFixture<AsideDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
