import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { of } from "rxjs";
import { IProduct } from "../../Interfaces/IProduct";
import { IProductService } from "../../Interfaces/IProductService";
import { ProductListComponent } from "./product-list.component"

describe('ProductListComponent', () => {
    let productListComponent: ComponentFixture<ProductListComponent>;
    let mockIProductService = jasmine.createSpyObj('IProductService', ['getProducts']);
    let data: IProduct[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductListComponent],
            providers: [{provide: IProductService, useValue: mockIProductService}],
        })

        data = [
            {
              "productId": 1,
              "productName": "Leaf Rake",
              "productCode": "GDN-0011",
              "releaseDate": "March 19, 2021",
              "description": "Leaf rake with 48-inch wooden handle.",
              "price": 19.95,
              "starRating": 3.2,
              "imageUrl": "assets/images/leaf_rake.png"
            },
            {
              "productId": 2,
              "productName": "Garden Cart",
              "productCode": "GDN-0023",
              "releaseDate": "March 18, 2021",
              "description": "15 gallon capacity rolling garden cart",
              "price": 32.99,
              "starRating": 4.2,
              "imageUrl": "assets/images/garden_cart.png"
            },
            {
              "productId": 5,
              "productName": "Hammer",
              "productCode": "TBX-0048",
              "releaseDate": "May 21, 2021",
              "description": "Curved claw steel hammer",
              "price": 8.9,
              "starRating": 4.8,
              "imageUrl": "assets/images/hammer.png"
            },
            {
              "productId": 8,
              "productName": "Saw",
              "productCode": "TBX-0022",
              "releaseDate": "May 15, 2021",
              "description": "15-inch steel blade hand saw",
              "price": 11.55,
              "starRating": 3.7,
              "imageUrl": "assets/images/saw.png"
            },
            {
              "productId": 10,
              "productName": "Video Game Controller",
              "productCode": "GMG-0042",
              "releaseDate": "October 15, 2020",
              "description": "Standard two-button video game controller",
              "price": 35.95,
              "starRating": 4.6,
              "imageUrl": "assets/images/xbox-controller.png"
            }
        ]

        productListComponent = TestBed.createComponent(ProductListComponent);
        mockIProductService.getProducts.and.returnValue(of(data));
    })

    it('should filter the products array in base of a filter string', () => {
        let value: string = 'Leaf Rake';
        productListComponent.detectChanges();

        productListComponent.componentInstance.filteredProducts =  productListComponent.componentInstance.performFilter(value);
        expect(productListComponent.componentInstance.filteredProducts.length).toBe(1);
    
      });
})