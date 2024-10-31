import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomepageComponent,
    DataGridComponent],
  imports: [
    CommonModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomepageComponent,
    DataGridComponent]
})
export class CalendarioModule { }
