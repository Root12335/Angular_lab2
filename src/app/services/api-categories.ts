import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class ApiCategories {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://69e29e1e3327837a1552862e.mockapi.io/categories';

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.apiUrl);
  }
}
