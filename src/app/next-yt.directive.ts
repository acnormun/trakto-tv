import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextYt]',
})
export class NextYtDirective {
  constructor() {}

  @HostListener('click')
  nextYTFunc() {
    var elm = document.getElementById('yt');
    var item = document.getElementsByClassName('yt');
    elm?.append(item[0]);
  }
}
