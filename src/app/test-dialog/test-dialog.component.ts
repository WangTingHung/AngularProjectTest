import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {
  

  constructor(private dialogRef: MatDialogRef<TestDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }


}
