import { Component, OnInit } from '@angular/core';
import { ChidTofatherService } from 'src/app/services/chid-tofather.service';
@Component({
  selector: 'app-child-service-com',
  templateUrl: './child-service-com.component.html',
  styleUrls: ['./child-service-com.component.css']
})
export class ChildServiceComComponent implements OnInit {

  inputText : string = "";

  constructor(private service : ChidTofatherService) { }

  ngOnInit() {
  }

  add(){
    this.service.append(this.inputText);
    this.inputText = "";
  }
}
