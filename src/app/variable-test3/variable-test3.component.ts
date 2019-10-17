import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-variable-test3',
  templateUrl: './variable-test3.component.html',
  styleUrls: ['./variable-test3.component.css']
})
export class VariableTest3Component implements OnInit {

  @Input() names: any = {};
  message1: string;
  message2: string;
  childFn(item: any) {
    console.log(JSON.stringify(this.names) + '我是子类的方法');
    // this.message1 = ' click1 ' + this.names.name + ' 我是子類方法';
    this.message2 = ' click2 ' + item.name + ' 我是子類方法';
  }
  constructor() { }

  ngOnInit() {
  }

}
