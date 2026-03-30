import { Component, inject } from '@angular/core';
import { Courses } from '../courses/courses';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../services/categories';

@Component({
  selector: 'app-order',
  imports: [Courses, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId: number = 0;
  totalOrderPrice: number = 0;
  private categoriesService = inject(CategoriesService);
  categories: ICategory[] = this.categoriesService.getAllCategories();

  setTotalOrderPrice(receivedOrderPrice: number) {
    this.totalOrderPrice = receivedOrderPrice;
  }
}
