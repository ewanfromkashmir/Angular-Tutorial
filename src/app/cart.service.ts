import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  // Append the product to the items list
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Get the products in the items list and return them
  getItems() {
    return this.items;
  }

  // Set the items list to empty and return the empty list
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Get shipping prices from the shipping.json file

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
