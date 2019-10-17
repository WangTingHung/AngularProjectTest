import { Component, OnInit } from '@angular/core';
import { FatherAsServiceComponent } from 'src/app/father-as-service/father-as-service.component';
@Component({
  selector: 'app-father-service-child',
  templateUrl: './father-service-child.component.html',
  styleUrls: ['./father-service-child.component.css']
})
export class FatherServiceChildComponent implements OnInit {

  constructor(private father1 : FatherAsServiceComponent) { }

  ngOnInit() {
  }

}
