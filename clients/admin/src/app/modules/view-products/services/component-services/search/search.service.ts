import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchedBy: string;
  constructor() { }
  performSearch(searchBy) {
    console.log('searching by: ', searchBy);
    this.searchedBy = searchBy;
    return searchBy;
  }
  getSearchedValue() {
    return this.searchedBy;
  }
}
