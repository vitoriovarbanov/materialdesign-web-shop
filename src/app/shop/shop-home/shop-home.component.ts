import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    { src: "../../../assets/shop-product-categories/8.jpg", alt: 'display-alt-text-here', text: 'Food and Beverages'},
    { src: "../../../assets/shop-product-categories/9.jpg", alt: 'display-alt-text-here', text: 'Herbs'},
    { src: "../../../assets/shop-product-categories/3.jpg", alt: 'display-alt-text-here'},
    { src: "../../../assets/shop-product-categories/4.jpg", alt: 'display-alt-text-here'},
    { src: "../../../assets/shop-product-categories/5.jpg", alt: 'display-alt-text-here'},
    { src: "../../../assets/shop-product-categories/2.jpg", alt: 'display-alt-text-here'},
    { src: "../../../assets/shop-product-categories/7.jpg", alt: 'display-alt-text-here'},
  ]

}
