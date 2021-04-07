import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {
  Imagedata = [
    '../../../assets/shop-home/header-top/888.jpg',
    '../../../assets/shop-home/header-top/444.jpg',
    '../../../assets/shop-home/header-top/555.jpg',
    '../../../assets/shop-home/header-top/777.jpg',
  ]

  images = [
    { src: "../../../assets/shop-product-categories/8.jpg", alt: 'display-alt-text-here', text: 'Food and Beverages' },
    { src: "../../../assets/shop-product-categories/9.jpg", alt: 'display-alt-text-here', text: 'Herbs and Botanicals' },
    { src: "../../../assets/shop-product-categories/10.jpg", alt: 'display-alt-text-here', text: 'Beauty and Personal care' },
    { src: "../../../assets/shop-product-categories/5.jpg", alt: 'display-alt-text-here', text: 'Sports and Fitness' },
    { src: "../../../assets/shop-product-categories/11.jpg", alt: 'display-alt-text-here', text: 'Vitamins and Supplements' },
    { src: "../../../assets/shop-product-categories/12.jpg", alt: 'display-alt-text-here', text: 'Superfoods' },
    { src: "../../../assets/shop-product-categories/13.jpg", alt: 'display-alt-text-here', text: 'Diet' },
  ]

  constructor() { }

  ngOnInit(): void {
    this.Repeat()
  }


  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 4000);
  }
  startIndex = 0;

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

}
