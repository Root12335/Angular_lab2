import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../models/icourse';

@Injectable({
  providedIn: 'root',
})
export class ApiCourses {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://69e29e1e3327837a1552862e.mockapi.io/courses';

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.apiUrl);
  }

  getCoursesByCategoryID(catID: string | number): Observable<ICourse[]> {
    if (String(catID) === '0') {
      return this.getAllCourses();
    }

    return this.httpClient.get<ICourse[]>(this.apiUrl, {
      params: {
        catId: String(catID),
      },
    });
  }

  getCourseByID(cID: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.apiUrl}/${cID}`);
  }

  addCourse(course: ICourse): Observable<ICourse> {
    return this.httpClient.post<ICourse>(this.apiUrl, course);
  }
}
