import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../models/ProductDetails'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.productDetails = this.router.snapshot.data
    console.log(this.productDetails)
  }

  testSubmit(){
    console.log(`ok`)
  }
}
