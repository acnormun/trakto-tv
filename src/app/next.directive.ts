import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  nextFunc(){
    var elm = document.getElementById("slider-main")
    var item = document.getElementsByClassName("item")
    elm?.append(item[0])
  }

}
