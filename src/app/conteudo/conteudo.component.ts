import { Component, OnInit } from '@angular/core';
import { ApiAulasService } from '../services/api-aulas.service';
import { TAulas } from 'src/types/aulas.t';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
})
export class ConteudoComponent implements OnInit {
  constructor(private aulasService: ApiAulasService) {}

  listaAulas: Array<TAulas> = [
    {
      id: 0,
      capa: '',
      titulo: ' ',
    },
  ];

  ngOnInit(): void {
    this.aulasService
      .getData()
      .subscribe((data) => (this.listaAulas = data.aulas));
  }
}
