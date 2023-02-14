import {Component} from '@angular/core';

import {PaisService} from '../../services/pais.service';
import {Pais} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  buscarPor: string = 'region';
  regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activa: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(region: string): void {
    if (region === this.activa) {
      return;
    }
    this.activa = region;
    this.paises = [];
    this.paisService.buscarPor(region, this.buscarPor)
      .subscribe(value => this.paises = value);
  }

}
