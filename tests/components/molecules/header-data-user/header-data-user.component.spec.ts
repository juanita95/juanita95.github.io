import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HeaderDataUserComponent } from '../../../../src/app/components/molecules/header-data-user/header-data-user.component';
import { initialState } from '../../../../src/app/ngxr/auth/auth.reducer';
import { authActions } from '../../../../src/app/ngxr/auth/auth.actions';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('HeaderDataUserComponent', () => {
  let component: HeaderDataUserComponent;
  let store: MockStore;
  let fixture: ComponentFixture<HeaderDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDataUserComponent ],
      providers: [provideMockStore({initialState})],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HeaderDataUserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch one time get auth action', () => {
    const storeDispatch = jest.spyOn(store, 'dispatch').mockImplementation();
    const action = authActions.getUser();
    TestBed.createComponent(HeaderDataUserComponent);
    fixture.detectChanges(); //llama el oninit
    expect(storeDispatch).toBeCalled();
    expect(storeDispatch).toBeCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(action);
 
  });

  it('should get user from selector', () => {
    const storeSelector = jest.spyOn(store, 'select').mockImplementation();
    const user = {
      "display_name" : "Juanita Aranzazu Aguirre",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/31fe7sl5k43xy6bk5mbmmsvtl23m"
      },
      "followers" : {
        "href" : null,
        "total" : 0
      },
      "href" : "https://api.spotify.com/v1/users/31fe7sl5k43xy6bk5mbmmsvtl23m",
      "id" : "31fe7sl5k43xy6bk5mbmmsvtl23m",
      "images" : [ ],
      "type" : "user",
      "uri" : "spotify:user:31fe7sl5k43xy6bk5mbmmsvtl23m"
    };
    TestBed.createComponent(HeaderDataUserComponent);
    fixture.detectChanges(); //llama el oninit
    expect(storeSelector).toBeCalled();
    expect(storeSelector).toBeCalledTimes(1);
  });

  it('should dispatch access token action', () => {
    const storeDispatch = jest.spyOn(store, 'dispatch').mockImplementation();
    TestBed.createComponent(HeaderDataUserComponent);
    component.logOut(); //llama el oninit
    expect(storeDispatch).toBeCalled();
    expect(storeDispatch).toBeCalledTimes(1);
  });

});
