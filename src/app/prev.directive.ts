import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor() {}

  @HostListener('click')
  prevFunc() {
    var elm = document.getElementById('md');
    var item = document.getElementsByClassName('md');
    elm?.prepend(item[item.length - 1]);
  }
}
