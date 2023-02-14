import {Component, Input} from '@angular/core';

import {Pais} from '../../interfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-buscar-por',
  templateUrl: './buscar-por.component.html',
  styleUrls: ['./buscar-por.component.css']
})
export class BuscarPorComponent {

  @Input() buscarPor: string = '';
  termino: string = '';
  ocultarSugerencia: boolean = true;
  hayError: boolean = false;
  paises: Pais[] = [];
  sugerencias: Pais[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string): void {
    this.hayError = false;
    this.paises = [];
    this.sugerencias = [];
    this.ocultarSugerencia = true;
    this.termino = termino;
    this.paisService.buscarPor(termino, this.buscarPor)
      .subscribe(paises => {
        this.paises = paises;
      }, _ => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencia(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.ocultarSugerencia = false;
    this.paisService.buscarPor(termino, this.buscarPor)
      .subscribe(
        value => this.sugerencias = value.slice(),
        _ => this.sugerencias = []);
  }
}
