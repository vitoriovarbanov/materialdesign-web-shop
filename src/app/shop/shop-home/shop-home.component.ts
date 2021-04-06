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
    { src: "../../../assets/shop-product-categories/9.jpg", alt: 'display-alt-text-here', text: 'Herbs and Botanicals'},
    { src: "../../../assets/shop-product-categories/10.jpg", alt: 'display-alt-text-here', text: 'Beauty and Personal care'},
    { src: "../../../assets/shop-product-categories/5.jpg", alt: 'display-alt-text-here', text: 'Sports and Fitness'},
    { src: "../../../assets/shop-product-categories/11.jpg", alt: 'display-alt-text-here', text: 'Vitamins and Supplements'},
    { src: "../../../assets/shop-product-categories/12.jpg", alt: 'display-alt-text-here', text: 'Superfoods'},
    { src: "../../../assets/shop-product-categories/13.jpg", alt: 'display-alt-text-here', text: 'Diet'},
  ]

}
