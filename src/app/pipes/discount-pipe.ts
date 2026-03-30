import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercent: number = 10): number {
    const discountAmount = price * (discountPercent / 100);

    const finalPrice = price - discountAmount;

    return finalPrice;
  }
}
