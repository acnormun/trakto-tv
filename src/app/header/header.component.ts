import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  date = new Date();
  dateFormatado = this.date.toLocaleDateString()


}