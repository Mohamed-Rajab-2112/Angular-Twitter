import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() name: string;
  @Input() placeholder: string;
  @Output() emitSearchText: EventEmitter<string> = new EventEmitter();
  searchText: string;
  searchIcon = faSearch;

  constructor() {
  }

  submitSearch() {
    this.emitSearchText.emit(this.searchText);
  }

}
