import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './web/Calendario/pages/homepage/homepage.component';
import { SociosComponent } from './web/Socios/Socios.component';

const routes: Routes = [
  {
    path: 'Calendario',
    component: HomepageComponent,
  },
  {
    path: 'Socios',
    component: SociosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
