import { Component, OnInit } from '@angular/core';
import { PanelaService } from 'src/app/services/panela.service';
import { Panela } from '../models/panela';

@Component({
  selector: 'app-panela-consulta',
  templateUrl: './panela-consulta.component.html',
  styleUrls: ['./panela-consulta.component.css']
})
export class PanelaConsultaComponent implements OnInit {

  panelas:Panela[];
  constructor(private panelaService: PanelaService) { }

  ngOnInit() {

    this.panelaService.get().subscribe(result => {
      this.panelas = result;
    });

  }
}
