import { Component, OnInit, ViewChild } from '@angular/core';
import { products } from '../products';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { VariableTest3Component } from 'src/app/variable-test3/variable-test3.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  products = products;
  counter = 0; // 測試onChange

  private com1Tocom2; // 傳遞參數4
  data = 'parent'; // 傳遞參數6

  dataSet = [
    {'id': 0, 'name': '張三'},
    {'id': 1, 'name': '李四'},
    {'id': 2, 'name': '王五'},
  ];

  // 傳遞參數3
  @ViewChild(VariableTest3Component) child: VariableTest3Component;
  father(item: any) {
    console.log('父層物件' + JSON.stringify(item));
    this.child.childFn(item); // 調用子層的方法
  }

  // 傳遞參數1
  bar(event: any) {
    alert('父層接收事件印出:' + event);
  }

  // 傳遞參數4
  appFn(event: any) {
    console.log('方法四' + event);
    this.com1Tocom2 = event;
  }

  ngOnInit() {
    setTimeout(() => {
      this.counter++;
    }, 2000);
  }

  share(name) { // 觸發的function事件
    window.alert(' 產品名稱 : '+ name+' Button Click!');
  }

  onNotify(){
    window.alert('綁定通知!');
  }

  openDialog(){
    this.dialog.open(TestDialogComponent);
  }
}
