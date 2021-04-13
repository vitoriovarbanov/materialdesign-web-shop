import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  test$
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.test$ = this.router.snapshot.data
    console.log(this.test$)
  }

}
