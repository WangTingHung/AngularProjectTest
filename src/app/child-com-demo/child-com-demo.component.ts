import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-com-demo',
  templateUrl: './child-com-demo.component.html',
  styleUrls: ['./child-com-demo.component.css']
})
export class ChildComDemoComponent implements OnInit {

  dog : string;
  @Input()
  public set inputyy(v:string){
    this.dog = v.toUpperCase();
    console.log(v);
  }
  public get inputyy():string{
    return this.dog;
  }

  constructor() { }

  ngOnInit() {
  }

}
