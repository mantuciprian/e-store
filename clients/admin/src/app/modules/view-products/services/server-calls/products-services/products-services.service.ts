import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<any> {
    return this._http.get(`http://${environment.localIp}:3000/products/products`,
     {responseType: 'json'}).pipe(catchError((e) => this.handleError(e)));
  }

  getCategories(): Observable<any> {
    return this._http.get(`http://${environment.localIp}:3000/products/products-categories`,
     {responseType: 'json'}).pipe(catchError((e) => this.handleError(e)));
  }
  test() {
    alert ('test');
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message, 'status is ' + err.status);
    return throwError(err.message);
  }
}
