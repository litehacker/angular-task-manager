import { Component, OnInit } from '@angular/core';

type TaskType = {
  title:string,
  description:string,
  deadline:Date,
  complited:boolean
}

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})


export class TaskViewComponent implements OnInit {

  constructor() {
    let today = new Date();
    let sampleTask: TaskType = {title:'this is a default title', description:'this a description string', deadline:today, complited:false};
   }

  ngOnInit(): void {
  }

}
