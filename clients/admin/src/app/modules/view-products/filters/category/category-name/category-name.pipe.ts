import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {

  transform(value: any, categories: any): any {
    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === value) {
         value = categories[i].category_name;
         break;
        } else {
           value = 'uknown';
        }
       }
    }
    return value;
  }

}
