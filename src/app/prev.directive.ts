import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  nextFunc(){
    var elm = document.getElementById("slider-main")
    var item = document.getElementsByClassName("item")
    elm?.prepend(item[item.length - 1])
  }

}
