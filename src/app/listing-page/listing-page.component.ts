import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

}
