import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classified',
  templateUrl: './classified.component.html',
  styleUrls: ['./classified.component.scss']
})
export class ClassifiedComponent implements OnInit {
  @Input() navigation;
  constructor() { }

  ngOnInit(): void {
  }

}
