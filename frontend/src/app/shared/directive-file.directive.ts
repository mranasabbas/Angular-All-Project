import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveFile]'
})
export class DirectiveFileDirective {

  @Input() changeBGC: string = '#dadada';
  @Input() changeTextColor: string = 'black';
  @Input() changePadding: string = '20px';
  @Input() changeBR: string = '20px';

  isToggled: boolean = true;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    if (target.tagName === 'BUTTON') {
      if (this.isToggled) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.changeBGC);
        this.renderer.setStyle(this.el.nativeElement, 'color', this.changeTextColor);
        this.renderer.setStyle(this.el.nativeElement, 'padding', this.changePadding);
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.changeBR);
      } else {
        
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#dadada');
        this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
        this.renderer.setStyle(this.el.nativeElement, 'padding', '20px');
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '20px');
      }


      this.isToggled = !this.isToggled;
    }
  }
}



