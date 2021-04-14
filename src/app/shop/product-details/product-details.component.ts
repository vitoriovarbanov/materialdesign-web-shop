import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails
  imgCategory = this.router.snapshot.url[0].path

  reviewsForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  })
  constructor(private router: ActivatedRoute,private reviewsSrvc: ReviewsService) { }

  ngOnInit(): void {

    this.productDetails = this.router.snapshot.data
    console.log(this.router.snapshot.data)
  }

  postProductReview(){
    this.reviewsSrvc.createPostReviewRequest(this.imgCategory,this.router.snapshot.url[1].path)
  }

  clickedHere(e){
    e.target.setAttribute("checked", "checked");
    console.log(e.target)

  }
}
