import { Component, OnInit } from '@angular/core';
import { ChidTofatherService } from 'src/app/services/chid-tofather.service';

@Component({
  selector: 'app-father-service-com',
  templateUrl: './father-service-com.component.html',
  styleUrls: ['./father-service-com.component.css'],
  providers: [ChidTofatherService] // 模块中依赖的服务，引入后该模块下所有的组件都可以使用(注入服务)
})
export class FatherServiceComComponent implements OnInit {

  list: string[] = [];

  constructor(private service: ChidTofatherService) { }

  ngOnInit() {
    this.list = this.service.list;
    console.log('father:' + this.list);
  }

}
