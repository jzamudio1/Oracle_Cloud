import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { SociosComponent } from '../Socios/Socios.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MainComponent, SociosComponent],
  imports: [HttpClientModule, SharedModule, MatTableModule],
  exports: [MainComponent],
})
export class MainModule {}
