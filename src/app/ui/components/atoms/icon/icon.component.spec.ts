import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains icon with color blue', () => {
    component.color = 'blue';
    component.url = "/assets/svg/fav.svg"
    const currentIcon = `<svg id='heart' xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"  viewBox="0 0 18 16" >
    <path
      fill='white'
      d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
    </path>
    </svg>`
    const nuewUrl = `<svg id='heart' xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"  viewBox="0 0 18 16" >
    <path
      fill='blue'
      d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
    </path>
    </svg>`

    
    const request = httpMock.expectOne(component.url);
    expect(request.request.method).toBe('GET');
    request.flush(currentIcon);
    component.readFile();
    component.normalizeSvg(`'blue'`);
    component.ngOnChanges();

    expect(component.svgIcons?.nativeElement.innerHTML).toEqual(nuewUrl);
  });
});
