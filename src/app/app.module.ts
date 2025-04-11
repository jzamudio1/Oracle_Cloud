import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';
import { MatButtonModule } from '@angular/material/button';
import { CalendarioModule } from './web/Calendario/calendario.module';

@NgModule({
  declarations: [AppComponent, NavegacionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarioModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [DatePipe, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
