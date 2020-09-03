import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit, AfterViewInit { 
  name:string;
  inputInteraction:string;
  @ViewChild('nameRef' )nameElementRef: ElementRef;

  greetUser(updateValue){
    this.inputInteraction = updateValue;
    if (this.inputInteraction==='Giorgi'){
      this.inputInteraction+=' back!'
    }
  }

  ngAfterViewInit():void {
    this.nameElementRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }


}
