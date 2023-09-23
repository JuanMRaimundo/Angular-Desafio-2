import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplayFlex]',
})
export class DisplayFlexDirective {
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.establecerPosicion();
  }
  establecerPosicion() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'justify-content',
      'center'
    );
  }
}
