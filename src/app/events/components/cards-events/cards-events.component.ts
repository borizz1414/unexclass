import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards-events',
  templateUrl: './cards-events.component.html',
  styleUrls: ['./cards-events.component.scss']
})
export class CardsEventsComponent implements OnInit {
a = 'assets/img/eventos.png'
 @Input() icon_footer;
 @Input() actions_icons;
 @Input() title;
 @Output() event_icon : EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  sendEvent(type){
    this.event_icon.emit(type)
  }
}
