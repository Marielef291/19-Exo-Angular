import { Injectable } from '@angular/core';
import { Product } from '../types/products'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = []

  constructor() {
    const stored = localStorage.getItem('products')
    if(stored) {
      this.products = JSON.parse(stored)
    }
   }

   addFormation(formation: Product){
    this.products.push(formation)
    localStorage.setItem("products", JSON.stringify(this.products))
   }

   deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1); // Retire l'élément du tableau
      this.updateLocalStorage(); // Met à jour le localStorage
    }
  }

  private updateLocalStorage() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }
}