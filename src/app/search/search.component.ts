import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  enterSearch: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onclickSearch() {
    this.searchTextChange.emit(this.enterSearch)
  }
}
