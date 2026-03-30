import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle, CurrencyPipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClickDirective } from '../../directives/app-disable-after-click';
import { CoursesService } from '../../services/courses';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgClass, NgStyle, CurrencyPipe, DiscountPipe, AppDisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnChanges {
  totalOrderPrice: number = 0;
  @Input('sentSelectedCatId') receivedCatId: number = 0;
  @Output() onTotalOrderPriceChanged: EventEmitter<number> = new EventEmitter<number>();

  private coursesService = inject(CoursesService);
  courses: ICourse[] = this.coursesService.getCoursesByCatID(0);
  filteredCourses: ICourse[] = this.courses;

  buy(price: number, quantity: string) {
    this.totalOrderPrice += price * +quantity;
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
  }

  ngOnChanges(): void {
    this.filteredCourses = this.coursesService.getCoursesByCatID(this.receivedCatId);
  }
}
