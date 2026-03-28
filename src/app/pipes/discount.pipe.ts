import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  /** Reduces `value` by `discountPercent`% (default 10). */
  transform(value: number, discountPercent: number = 10): number {
    if (value == null || Number.isNaN(Number(value))) {
      return value;
    }
    const pct =
      discountPercent == null || Number.isNaN(Number(discountPercent))
        ? 10
        : discountPercent;
    const result = Number(value) * (1 - pct / 100);
    return Math.round(result * 100) / 100;
  }
}
