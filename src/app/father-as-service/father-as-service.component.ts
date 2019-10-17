import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-as-service',
  templateUrl: './father-as-service.component.html',
  styleUrls: ['./father-as-service.component.css']
})
export class FatherAsServiceComponent implements OnInit {
  public name:string = "我是父组件的名字";
  public dataSet:Array<any> = [
    {"id":"0","name":"張三"},
    {"id":"1","name":"李四"},
    {"id":"2","name":"王五"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
