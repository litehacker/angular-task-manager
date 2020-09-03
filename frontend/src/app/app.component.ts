import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager Web App';
  owner = 'Giorgi Gvimradze';
  date = new Date();

  constructor(){
  }

  getOwner():string{
    return this.owner;
  }

}
