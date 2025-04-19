import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { SociosComponent } from '../Socios/Socios.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [MainComponent, SociosComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [MainComponent],
})
export class MainModule {}
