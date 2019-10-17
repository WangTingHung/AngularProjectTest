import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TestRegionComponent } from './test-region/test-region.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { TestSortComponent } from './test-sort/test-sort.component';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { VariableTest1Component } from './variable-test1/variable-test1.component';
import { VariableTest2Component } from './variable-test2/variable-test2.component';
import { VariableTest3Component } from './variable-test3/variable-test3.component';
import { VariableTest41Component } from './variable-test41/variable-test41.component';
import { VariableTest42Component } from './variable-test42/variable-test42.component';
import { FatherServiceComComponent } from './father-service-com/father-service-com.component';
import { ChildServiceComComponent } from './child-service-com/child-service-com.component';
import { ChildComDemoComponent } from './child-com-demo/child-com-demo.component';
import { FatherAsServiceComponent } from './father-as-service/father-as-service.component';
import { FatherServiceChildComponent } from './father-service-child/father-service-child.component';
import { TestOnChangeChildComponent } from './test-on-change-child/test-on-change-child.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    TestRegionComponent,
    TestDialogComponent,
    TestSortComponent,
    HeroesComponent,
    VariableTest1Component,
    VariableTest2Component,
    VariableTest3Component,
    VariableTest41Component,
    VariableTest42Component,
    FatherServiceComComponent,
    ChildServiceComComponent,
    ChildComDemoComponent,
    FatherAsServiceComponent,
    FatherServiceChildComponent,
    TestOnChangeChildComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'regions', component: TestRegionComponent},
      {path: 'table-sort', component: TestSortComponent},
      {path: 'hero', component: HeroesComponent},
      {path: 'father', component: FatherServiceComComponent},
      {path: 'fatherAsService', component: FatherAsServiceComponent}
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [TestDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
