import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for input data

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    TaskCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
