import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() buscarPor: string = '';
  debounced: Subject<string> = new Subject<string>();

  buscar(): void {
    this.onEnter.emit(this.termino);
    this.termino = '';
  }

  teclaPresionada(): void {
    this.debounced.next(this.termino);
  }

  ngOnInit(): void {
    this.debounced
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
          this.onDebounce.emit(value);
        }
      );
  }
}
