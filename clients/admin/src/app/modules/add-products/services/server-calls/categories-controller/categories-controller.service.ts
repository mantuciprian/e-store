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

  handleError(err: HttpErrorResponse) {
    console.log(err.message, 'status is ' + err.status);
    return throwError(err.message);
  }
}
