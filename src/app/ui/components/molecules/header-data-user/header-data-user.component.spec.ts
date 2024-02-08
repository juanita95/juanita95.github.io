import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDataUserComponent } from './header-data-user.component';

describe('HeaderDataUserComponent', () => {
  let component: HeaderDataUserComponent;
  let fixture: ComponentFixture<HeaderDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDataUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
