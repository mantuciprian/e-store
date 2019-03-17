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
  categoryName: string;
  constructor(private categoriesControllerService: CategoriesControllerService) { }

  ngOnInit() {
    this.isEditing = false;
    this.categories = [];
    this.categoryName = '';
    this.getCategories();
  }
  getCategories() {
    this.categoriesControllerService.getCategories().subscribe((categories) => {
      categories.forEach(category => {
        this.categories.push({id: category.id, category_name: category.category_name, isEditing: false});
      });
    });
  }
  edit(categoryIndex) {
    this.categories[categoryIndex].isEditing = !this.categories[categoryIndex].isEditing;
  }
  save(category, categoryIndex) {
    this.categoriesControllerService.editCategory(category).subscribe((res) => {
      if (res !== 'OK') {
        alert('An error has occured! Unable to save!');
      } else {
        this.categories[categoryIndex].isEditing = !this.categories[categoryIndex].isEditing;
      }
    });
  }
  delete(categoryId) {
    this.categoriesControllerService.deleteCategory(categoryId).subscribe((res) => {
      if (res !== 'OK') {
        alert('An error has occured! Unable to delete the category!');
      } else {
        this.categories = this.categories.filter((category) => {
          if (category.id !== categoryId) {
            return category;
          }
        });
      }
    });
  }

  addCategory(categoryName) {
    if (!categoryName || categoryName.length < 3) {
      alert('Please add a category name that has at last 3 characters');
      } else {
        this.categoriesControllerService.addCategory(categoryName).subscribe((res) => {
           if (res) {
            const newCategory  = {id: res.id, category_name: res.category_name, isEditing: false };
            this.categories.push(newCategory);
           }
        });
      }
  }

}
