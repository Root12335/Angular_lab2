import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true,
})
export class DisableAfterClickDirective {
  /**
   * When true, the button is disabled and clicks are ignored (e.g. sold out).
   */
  @Input() appDisableAfterClickDisabled = false;

  @HostBinding('disabled')
  get isDisabled(): boolean {
    return this.appDisableAfterClickDisabled || this.processing;
  }

  private processing = false;
  private originalLabel = '';

  constructor(
    private el: ElementRef<HTMLButtonElement>,
    private renderer: Renderer2,
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this.appDisableAfterClickDisabled) {
      return;
    }
    if (this.processing) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const btn = this.el.nativeElement;
    this.originalLabel = btn.textContent?.trim() ?? '';
    this.processing = true;
    this.renderer.setProperty(btn, 'textContent', 'Processing...');

    window.setTimeout(() => {
      this.processing = false;
      this.renderer.setProperty(btn, 'textContent', this.originalLabel);
    }, 3000);
  }
}
