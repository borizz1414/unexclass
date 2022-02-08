import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-get',
  templateUrl: './to-get.component.html',
  styleUrls: ['./to-get.component.scss']
})
export class ToGetComponent implements OnInit {
  open_form = false;
  title="Mi ubicación"
  invitado = true;
  constructor() { }

  ngOnInit(): void {
  }

}
