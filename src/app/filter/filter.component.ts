import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input('total') all: number = 0; // can also create an alias
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioBtn: string = 'All'

  @Output()
  filterByRadioBtn: EventEmitter<string> = new EventEmitter<string>();

  onClickRadioBtn() {
    this.filterByRadioBtn.emit(this.selectedRadioBtn);
    console.log(this.selectedRadioBtn) //check console if value is passed...
  }
};
