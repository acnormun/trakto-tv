import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor() { }

  @HostListener('click')
  nextFunc(){
    var elm = document.getElementById("md")
    var item = document.getElementsByClassName("md")
    elm?.append(item[0])
  }

}
