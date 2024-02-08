import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemComponent } from '../../../../src/app/components/molecules/sidebar-item/sidebar-item.component';

describe('SidebarItemComponent', () => {
  let component: SidebarItemComponent;
  let fixture: ComponentFixture<SidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
