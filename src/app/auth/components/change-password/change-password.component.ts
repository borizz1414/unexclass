import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  fieldTextType: any;
  constructor(private fb: FormBuilder,
              // tslint:disable-next-line: variable-name
              private _auth: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  login(): void{
    this._auth.login(this.form).subscribe((resp: any) => {
      // this.router.navigate(['/inicio/directorio']);
    });
    this.router.navigate(['/inicio/directorio']);

  }
  showPassword(): void{
  this.fieldTextType = !this.fieldTextType;
  }

}
