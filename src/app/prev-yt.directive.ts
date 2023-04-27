import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevYt]',
})
export class PrevYtDirective {
  constructor() {}

  @HostListener('click')
  prevFunc() {
    var elm = document.getElementById('yt');
    var item = document.getElementsByClassName('yt');
    elm?.prepend(item[item.length - 1]);
  }
}
