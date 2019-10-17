import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import {RegionServiceService} from '../region-service.service';

@Component({
  selector: 'app-test-region',
  templateUrl: './test-region.component.html',
  styleUrls: ['./test-region.component.css']
})
export class TestRegionComponent implements OnInit {

  regions : Region[];

  constructor(private regionService :RegionServiceService) { }

  ngOnInit() {
    this.regionService.getAllRegion().subscribe(data => {
      console.log(data);
      this.regions = data;
    });
  }

}
