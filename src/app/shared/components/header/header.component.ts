import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationDashboard } from '../../navigations/navigation';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigation = navigationDashboard;
  constructor(private router:Router,
     private _auth : AuthService) { }

  ngOnInit(): void {
  }
  redirectHome(){
    this.router.navigate(['/directorio']);
  }
  logout(){
    this._auth.logout()
  }

}
