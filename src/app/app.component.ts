import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';
  showValue:number = 0;
interpolate="test";
  generate(){
  this.showValue=Math.floor(Math.random()*20);
  }

 function(a,b)
 {
   return a+b;
 }

}




