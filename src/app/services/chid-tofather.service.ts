import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChidTofatherService {

  list: string[] = [];
  constructor() { }
  append(str: any) {
    this.list.push(str);
    console.log('service: ' + this.list);
  }
}
