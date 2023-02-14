import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';

import {PaisService} from '../../services/pais.service';
import {Pais} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais: Pais;
  object = Object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(
          ({id}) => this.paisService.verPaisPorId(id)
        ),
        tap(console.log)
      )
      .subscribe(value => {
        this.pais = value;
      });
  }

}
