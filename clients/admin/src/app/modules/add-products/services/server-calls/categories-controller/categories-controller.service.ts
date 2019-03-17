import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesControllerService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<any> {
    return this._http.get(`http://${environment.localIp}:3000/categories-controller/get-categories`,
     {responseType: 'json'}).pipe(catchError((e) => this.handleError(e)));
  }

  editCategory(category): Observable<any> {
    return this._http.post(`http://${environment.localIp}:3000/categories-controller/edit`,
    category, {responseType: 'text'}).pipe(catchError((e) => this.handleError(e)));
  }

  deleteCategory(categoryId): Observable<any> {
    return this._http.post(`http://${environment.localIp}:3000/categories-controller/delete`,
    {categoryId: categoryId}, {responseType: 'text'}).pipe(catchError((e) => this.handleError(e)));
  }

  addCategory(categoryName): Observable<any> {
    return this._http.post(`http://${environment.localIp}:3000/categories-controller/add-category`,
    {category_name: categoryName}, {responseType: 'json'}).pipe(catchError((e) => this.handleAddError(e)));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message, 'status is ' + err.status);
    return throwError(err.message);
  }
  handleAddError(err: HttpErrorResponse) {
    console.log(err.message, 'status is ' + err.status);
    if (err.status === 500) {
      alert('Server error or the category name already exists!');
    }
    return throwError(err.message);
  }
}
