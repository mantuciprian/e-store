import { Component, OnInit, HostBinding } from '@angular/core';
import { SearchService } from '../../services/component-services/search/search.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class FilterPanelComponent implements OnInit {
  searchBy: any;
  constructor(private search: SearchService) { }

  ngOnInit() {
    this.searchBy = '';
  }
  performSearch() {
    this.search.performSearch(this.searchBy);
  }
}
