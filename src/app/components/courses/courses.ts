import { Component } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click.directive';

@Component({
  selector: 'app-courses',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    DiscountPipe,
    DisableAfterClickDirective,
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  selectedCategory: string = 'All';

  courses: ICourse[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Doe',
      price: 49,
      seats: 10,
      Image: 'https://picsum.photos/200?random=10',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 2,
      title: 'UI/UX Design Basics',
      instructor: 'Jane Smith',
      price: 39,
      seats: 0,
      Image: 'https://picsum.photos/200?random=11',
      catId: 2,
      category: 'Design',
    },
    {
      id: 3,
      title: 'Digital Marketing 101',
      instructor: 'Bob Johnson',
      price: 29,
      seats: 2,
      Image: 'https://picsum.photos/200?random=12',
      catId: 3,
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Business Strategy',
      instructor: 'Alice Brown',
      price: 59,
      seats: 5,
      Image: 'https://picsum.photos/200?random=13',
      catId: 4,
      category: 'Business',
    },
    {
      id: 5,
      title: 'TypeScript Advanced',
      instructor: 'Charlie Wilson',
      price: 44,
      seats: 1,
      Image: 'https://picsum.photos/200?random=14',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 6,
      title: 'Figma for Designers',
      instructor: 'Diana Lee',
      price: 35,
      seats: 8,
      Image: 'https://picsum.photos/200?random=15',
      catId: 2,
      category: 'Design',
    },
  ];

  categories: string[] = ['All', 'Programming', 'Design', 'Marketing', 'Business'];

  register(course: ICourse): void {
    if (course.seats > 0) {
      course.seats--;
    }
  }
}
