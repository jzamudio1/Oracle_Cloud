import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { AppRoutingModule } from '../app-routing.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FormsModule } from '@angular/forms'; // << para poder usar [(ngModel)]
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Para usar fechas nativas
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SidebarComponent, DataGridComponent, NavegacionComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [SidebarComponent, DataGridComponent, NavegacionComponent],
})
export class SharedModule {}
