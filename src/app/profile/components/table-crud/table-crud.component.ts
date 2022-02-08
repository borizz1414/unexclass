import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.scss']
})
export class TableCrudComponent implements OnInit {
 @Input() title;
 @Output() crud_event : EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  getEvent(action){
    this.crud_event.emit(action);
  }
  


}
