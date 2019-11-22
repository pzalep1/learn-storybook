import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { NamePlateComponent } from './name-plate/name-plate.component';
import { DoorBellComponent } from './door-bell/door-bell.component';

@NgModule({
  declarations: [
    AppComponent,
    NameTagComponent,
    NamePlateComponent,
    DoorBellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
