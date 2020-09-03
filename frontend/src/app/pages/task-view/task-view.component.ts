import { Component, OnInit } from '@angular/core';

type TaskType = {
  title:string,
  description:string,
  deadline:Date,
  complited:boolean,
  img:string,
  id:string
}

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent implements OnInit {

  constructor() {
    
  }

  sampleTaskParent: TaskType = {title:'this is a default title', description:'this a description string', deadline:new Date(), complited:false, img:'Diğer', id:"0000"};

  ngOnInit(): void {
  }
  

}
