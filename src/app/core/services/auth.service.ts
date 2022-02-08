import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router) {}

  register(body): Observable<any> {
    console.log(body);
    return this.http.post<any>(`${environment.api_url}users`, body).pipe(
      catchError(this.handleError),
      map((resp: any) => this.router.navigate(['/auth/ingresar']))
    );
  }
  login(body): Observable<any> {
    console.log(body, 'body')
    return this.http.post(`${environment.api_url}/login`, body).pipe(
      // catchError(this.handleError),
      map((resp: any) => {
        const roles = resp.user.roles;
        const response = {
          message: resp.message,
        };
        roles.find((element) => this.setRole(element.id));

        return resp.access_token === undefined
          ? response
          : (this.router.navigate(['/inicio/directorio']),
            this.setToken(resp.access_token),
            response);
      })
    );
  }
  changePassword(body): Observable<any> {
    return this.http
      .put<any>(`${environment.api_url}change-password`, body)
      .pipe(
        catchError(this.handleError),
        map((resp: any) => resp)
      );
  }
  private handleError(error: HttpErrorResponse): any {
    console.log(error);
    return throwError('Ha ocurrido un error');
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  setToken(token): void {
    localStorage.setItem('token', token);
  }
  setRole(role): void {
    localStorage.setItem('role', role);
  }
  getRole(): string {
    return localStorage.getItem('role');
  }
  getUser() {}
  setUser(name) {}
  setRoleUser(role) {}
  getRoleUser() {}
  AuthNavigate(route) {
    // tslint:disable-next-line: curly
    if (this.getToken !== null) this.router.navigate(['/' + route]);
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
