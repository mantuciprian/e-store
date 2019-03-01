import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/component-services/search/search.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  searchBy: any;
  constructor(private search: SearchService) { }

  ngOnInit() {
    this.searchBy = '';
  }
  performSearch() {
    this.search.performSearch(this.searchBy)
  }
}
