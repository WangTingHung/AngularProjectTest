import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-variable-test42',
  templateUrl: './variable-test42.component.html',
  styleUrls: ['./variable-test42.component.css']
})
export class VariableTest42Component implements OnInit {
  @Input() com2: string;
  constructor() { }

  ngOnInit() {
  }

}
