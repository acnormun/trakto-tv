import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiAulasService } from '../services/api-aulas.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() tipo: string = ''

  listaAulas: any
  listaYt: any

  directive: string = ''

  constructor(private aulasService: ApiAulasService) { }

  getAulas() {
    this.aulasService.getData().subscribe((data) => {
      this.listaAulas = data.aulas
    })
  }
  ngOnInit(): void {
    this.aulasService.getData().subscribe((data) => this.listaAulas = data.aulas)

    if(this.tipo === 'md'){
      this.directive === 'appNext'
    }


  }

}
