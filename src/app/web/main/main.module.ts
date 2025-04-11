import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { CalendarioModule } from '../Calendario/calendario.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, CalendarioModule],
  exports: [MainComponent],
})
export class MainModule {}
