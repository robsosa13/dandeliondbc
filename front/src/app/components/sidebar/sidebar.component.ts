import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public identity;
  public token;
  private _opened: boolean = true;
  private showMenu;
  constructor(
    private _userService: UserService,
    private _router: Router,
  ){ 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    console.log (_router.url + ":)");
    
  }
  private _toggleOpened(): void {
    this._opened = !this._opened;
  }
  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');

    this.identity = null;
    this.token = null;
    //this._router.navigate(['']);
  }

}
