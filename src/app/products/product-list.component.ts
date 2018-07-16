import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      'productId': 8,
      'productName': 'Saw',
      'productCode': 'TBX-0022',
      'releaseDate': 'May 15, 2016',
      'description': '15-inch steel blade hand saw',
      'price': 11.55,
      'starRating': 3.7,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    },
    {
      'productId': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // filter product
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
    this.title = `Product List: ${message}`;
  }

}
