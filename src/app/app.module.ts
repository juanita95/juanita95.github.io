import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignerModule } from './material-designer/material-designer.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './shared/services/interceptor.service';
import { ROOT_REDUCERS } from './ngxr/app.state';
import { EffectsModule } from '@ngrx/effects';
import { TrackEffect } from './ngxr/track/track.effects';
import { AuthEffect } from './ngxr/auth/auth.effects';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['tracks', { auth: ['accessToken']}],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignerModule,
    ComponentsModule,
    CoreModule,
    PagesModule,
    StoreModule.forRoot(ROOT_REDUCERS, {metaReducers}),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([TrackEffect, AuthEffect])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
