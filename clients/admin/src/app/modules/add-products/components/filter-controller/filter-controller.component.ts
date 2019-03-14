import { Component, OnInit } from '@angular/core';
import { CategoriesControllerService } from '../../services/server-calls/categories-controller/categories-controller.service';

@Component({
  selector: 'app-filter-controller',
  templateUrl: './filter-controller.component.html',
  styleUrls: ['./filter-controller.component.scss']
})
export class FilterControllerComponent implements OnInit {
  categories: any;
  isEditing: boolean;
  constructor(private categoriesControllerService: CategoriesControllerService) { }

  ngOnInit() {
    this.isEditing = false;
    this.categories = [];
    // this.categories = [
    //   {id: 1, category_name: 'phones', isEditing: false},
    //   {id: 2, category_name: 'desktop && IT', isEditing: false},
    //   {id: 3, category_name: 'cars', isEditing: false}
    // ];
    this.categoriesControllerService.getCategories().subscribe((categories) => {
      categories.forEach(category => {
        this.categories.push({id: category.id, category_name: category.category_name, isEditing: false});
      });
    });
  }
  edit(categoryIndex) {
    this.categories[categoryIndex].isEditing = !this.categories[categoryIndex].isEditing;
  }
  save(categoryIndex) {
   //send to the server the category that gets modified 
  }

}
