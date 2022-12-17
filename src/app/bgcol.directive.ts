import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgcol]'
})
export class BgcolDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='blue';
   }

}
