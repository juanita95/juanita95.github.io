import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../../../src/app/ngxr/searcher/search.reducers';
import { SearchInputComponent } from '../../../../src/app/components/atoms/search-input/search-input.component';
import { searchActions } from '../../../../src/app/ngxr/searcher/search.actions';


describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let store: Store

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputComponent ],
      providers: [provideMockStore({initialState})],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
