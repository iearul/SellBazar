import { Component, OnInit } from '@angular/core';

import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingID: string): void {
    alert(`Deleting your listing with id ${listingID}`);
  }

}
