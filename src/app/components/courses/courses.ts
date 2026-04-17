import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle, CurrencyPipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClickDirective } from '../../directives/app-disable-after-click';
import { ApiCourses } from '../../services/api-courses';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgClass, NgStyle, CurrencyPipe, DiscountPipe, AppDisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnChanges, OnInit {
  totalOrderPrice: number = 0;
  @Input('sentSelectedCatId') receivedCatId: string = '0';
  @Output() onTotalOrderPriceChanged: EventEmitter<number> = new EventEmitter<number>();
  readonly fallbackImageUrl = 'https://picsum.photos/seed/course-fallback/300/180';

  private apiCoursesService = inject(ApiCourses);
  courses = signal<ICourse[]>([]);
  filteredCourses = signal<ICourse[]>([]);

  ngOnInit(): void {
    this.apiCoursesService.getAllCourses().subscribe((res) => {
      this.courses.set(res);
      this.filteredCourses.set(res);
    });
  }

  buy(price: number, quantity: string) {
    this.totalOrderPrice += price * +quantity;
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
  }

  getCourseImage(course: ICourse): string {
    const source = course.image ?? course.Image ?? '';
    const isPlaceholder = source.includes('via.placeholder.com');

    if (source && !isPlaceholder) {
      return source;
    }

    const seed = encodeURIComponent(String(course.id ?? course.title ?? 'course'));
    return `https://picsum.photos/seed/${seed}/300/180`;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement | null;
    if (img && img.src !== this.fallbackImageUrl) {
      img.src = this.fallbackImageUrl;
    }
  }

  ngOnChanges(): void {
    this.apiCoursesService.getCoursesByCategoryID(this.receivedCatId).subscribe((res) => {
      this.filteredCourses.set(res);
    });
  }
}
