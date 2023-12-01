import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFirstComponent } from './navbar-first.component';

describe('NavbarFirstComponent', () => {
  let component: NavbarFirstComponent;
  let fixture: ComponentFixture<NavbarFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarFirstComponent]
    });
    fixture = TestBed.createComponent(NavbarFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
