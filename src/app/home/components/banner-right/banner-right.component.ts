import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-banner-right',
  templateUrl: './banner-right.component.html',
  styleUrls: ['./banner-right.component.scss']
})
export class BannerRightComponent implements OnInit {
  formDate : FormGroup
  constructor(private fb:FormBuilder) {
    this.formDate = this.fb.group({
      datePicker:[new Date()]
    })
   }

  ngOnInit(): void {
  }

}


