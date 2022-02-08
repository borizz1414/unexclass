import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../../shared/auth-dialog/auth-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  user: any;
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _auth: AuthService,
    private router: Router,
    private socialService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.formRegister = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  register(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '462px',
      data: { content: 'success' },
      panelClass: 'custom-modal',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.router.navigate(['/inicio/directorio']);
    });
  }
  signInWithGoogle(): void {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
