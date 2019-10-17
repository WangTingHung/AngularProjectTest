import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-variable-test41',
  templateUrl: './variable-test41.component.html',
  styleUrls: ['./variable-test41.component.css']
})
export class VariableTest41Component implements OnInit {
  @Output() outcom1Fn = new EventEmitter<string>();
  com1Fn() {
    this.outcom1Fn.emit('我是com1组件的');
  }

  constructor() { }

  ngOnInit() {
  }

}
