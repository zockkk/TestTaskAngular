import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//import { DataEffects } from './store/data/data.effetc';
import { markerReduser } from './store/data/data.reduser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MarkerServise } from './services/map.service.';
import { DataEffects } from './store/data/data.effetc';

@NgModule({
  declarations: [AppComponent, MapComponent, SidebarComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ markers: markerReduser }),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [MarkerServise],
  bootstrap: [AppComponent],
})
export class AppModule {}
