import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-variable-test2',
  templateUrl: './variable-test2.component.html',
  styleUrls: ['./variable-test2.component.css']
})
export class VariableTest2Component implements OnInit {
  @Input() names: any = {};
  message: string;
  childFn() {
    console.log('我是子类的方法');
    this.message = ' click ' + this.names.name + ' 我是子類方法';
  }

  constructor() { }

  ngOnInit() {
  }

}
