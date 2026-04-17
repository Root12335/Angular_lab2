import { Component, inject, OnInit, signal } from '@angular/core';
import { Courses } from '../courses/courses';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ApiCategories } from '../../services/api-categories';

@Component({
  selector: 'app-order',
  imports: [Courses, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  selectedCatId: string = '0';
  totalOrderPrice: number = 0;
  private apiCategoriesService = inject(ApiCategories);
  categories = signal<ICategory[]>([]);

  ngOnInit(): void {
    this.apiCategoriesService.getAllCategories().subscribe((res) => {
      this.categories.set(res);
    });
  }

  setTotalOrderPrice(receivedOrderPrice: number) {
    this.totalOrderPrice = receivedOrderPrice;
  }
}
