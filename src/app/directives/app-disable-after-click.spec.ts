import { AppDisableAfterClickDirective } from './app-disable-after-click';
import { ElementRef } from '@angular/core';

describe('AppDisableAfterClickDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('button') };
    const directive = new AppDisableAfterClickDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
