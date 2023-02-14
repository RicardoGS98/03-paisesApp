import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PorPaisComponent} from './pais/pages/por-pais/por-pais.component';
import {PorCapitalComponent} from './pais/pages/por-capital/por-capital.component';
import {PorRegionComponent} from './pais/pages/por-region/por-region.component';
import {VerPaisComponent} from './pais/pages/ver-pais/ver-pais.component';

export const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
