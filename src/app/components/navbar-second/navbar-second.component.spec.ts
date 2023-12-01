import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSecondComponent } from './navbar-second.component';

describe('NavbarSecondComponent', () => {
  let component: NavbarSecondComponent;
  let fixture: ComponentFixture<NavbarSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSecondComponent]
    });
    fixture = TestBed.createComponent(NavbarSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
