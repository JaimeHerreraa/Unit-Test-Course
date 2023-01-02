import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './components/product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductsTableComponent } from './components/product-table/products-table.component';
import { ProductService } from './services/product.service';
import { IProductService } from './Interfaces/IProductService';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductsTableComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ],
  providers: [{provide: IProductService, useClass: ProductService}]
})
export class ProductModule { }
