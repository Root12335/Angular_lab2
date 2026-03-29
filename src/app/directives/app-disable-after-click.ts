import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class AppDisableAfterClickDirective {
  constructor(private el: ElementRef) {}

  @Input()
  appDisableAfterClickDisabled: boolean = false;

  @HostListener('click')
  onClick() {
    if (this.appDisableAfterClickDisabled) {
      return;
    }

    const button = this.el.nativeElement;

    button.disabled = true;

    const originalText = button.innerText;
    button.innerText = 'Processing...';

    setTimeout(() => {
      button.disabled = false;

      button.innerText = originalText;
    }, 3000);
  }
}
