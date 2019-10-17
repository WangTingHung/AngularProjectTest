import { Component, OnInit, OnChanges,Input} from '@angular/core';

@Component({
  selector: 'app-test-on-change-child',
  templateUrl: './test-on-change-child.component.html',
  styleUrls: ['./test-on-change-child.component.css']
})
export class TestOnChangeChildComponent implements OnInit ,OnChanges{
  
  @Input() iCounter;

  constructor() { 
    console.log('Child component constructor');
  }

  ngOnInit() {
    console.log('Child component ngOnInit');
  }

  ngOnChanges() {
    console.log('Child component ngOnChanges');
  }
}
