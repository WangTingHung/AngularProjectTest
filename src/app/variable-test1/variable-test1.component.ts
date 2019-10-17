import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-variable-test1',
  templateUrl: './variable-test1.component.html',
  styleUrls: ['./variable-test1.component.css']
})
export class VariableTest1Component implements OnInit {
  @Input() names: any = {}; // 引入的那一層所綁定使用的變數名稱,[names]="item" 
  @Output() foo2 = new EventEmitter<string>(); // 引入的那一層所綁定使用的事件名稱,(foo2)="bar($event)"

  todo(event: any) {
    console.log('子層接收到物件資料:' + JSON.stringify(this.names));
    this.foo2.emit(this.names.name + ' 你好');
  }


  constructor() { }

  ngOnInit() {
  }

}
