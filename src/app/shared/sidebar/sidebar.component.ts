import {Component, OnInit} from '@angular/core';
import {PageInterface} from '../../pais/interfaces/page.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  public pages: PageInterface[] = [
    {
      path: '',
      name: 'Buscar País!'
    },
    {
      path: 'capital',
      name: 'Por Capital!'
    },
    {
      path: 'region',
      name: 'Por Región!'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
