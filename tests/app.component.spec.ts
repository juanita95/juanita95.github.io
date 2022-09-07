import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'myMusicApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    expect(appComponent.title).toEqual('myMusicApp');
  });

  it(`should make match with snapshot'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toMatchSnapshot()
  });

});
