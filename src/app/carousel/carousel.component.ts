import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiAulasService } from '../services/api-aulas.service';
import { TAulas } from 'src/types/aulas.t';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() tipo: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonTitle: string = '';
  @Input() buttonColor: string = '';
  @Input() buttonLink: string = '';

  listaAulas: Array<TAulas> = [
    {
      id: 0,
      capa: '',
      titulo: '',
    },
  ];

  listaYt: Array<TAulas> = [
    {
      id: 0,
      capa: '',
      titulo: '',
    },
  ];

  constructor(private aulasService: ApiAulasService) {}

  getAulas() {
    this.aulasService.getData().subscribe((data) => {
      this.listaAulas = data.aulas;
    });
  }
  ngOnInit(): void {
    this.aulasService
      .getData()
      .subscribe((data) => (this.listaAulas = data.aulas));

    this.aulasService
      .getData()
      .subscribe((data) => (this.listaYt = data.youtube));
  }
}
