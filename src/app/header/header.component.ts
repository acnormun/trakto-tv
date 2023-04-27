import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() mode: string = '';
  @Input() visible: boolean = false;

  date = new Date();
  dateFormatado = this.date.toLocaleDateString();

  photo =
    '../../assets/icons/Pônei-Shetland-Americano-Branco-Trotando-na-Grama.jpg';
}
