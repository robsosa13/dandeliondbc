import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
//import { Router, NavigationStart } from '@angular/router'
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showMenu;
  public contenido = true;
  title = 'front';
  constructor(router:Router) {
    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
            this.showMenu = event.url !== "/";
            if(this.showMenu == true){
              this.contenido = false;
              console.log(this.contenido + ' cont');
            }
           
        }
      });
    }
    
   /* constructor
      (
        public _router: Router,
      ){
        if(window.location.pathname !== '/'){
          this.showMenu = true
          console.log("entro al if si"  + this.showMenu + window.location.pathname)
        }else{
          this.showMenu = false
          console.log("entro al if NO" + this.showMenu + window.location.pathname)
        }
    } */
}


