import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiAulasService } from '../services/api-aulas.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  listaAulas:any

  constructor(private aulasService : ApiAulasService){}

  getAulas(){
    this.aulasService.getData().subscribe((data) => {
      this.listaAulas = data.aulas
    })
  }
  ngOnInit(): void {
      this.aulasService.getData().subscribe((data) => this.listaAulas = data.aulas)
  }

}
