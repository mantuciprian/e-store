import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../../services/component-services/search/search.service';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  constructor(private searchService: SearchService) {}
  transform(products: any): any {
    const searchBy = this.searchService.getSearchedValue();
    if (searchBy !== undefined || '') {
      return products.filter((product) => { return product.product_name.toLowerCase().
        indexOf(searchBy.toString().toLowerCase()) !== -1;
      });
    } else {
      return products;
    }
  }

}
