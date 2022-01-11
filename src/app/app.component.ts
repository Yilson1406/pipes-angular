import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-app';
  display:boolean=false
  check:boolean=true;
  mayusculas(){
    this.check = !this.check ;
  }

}
