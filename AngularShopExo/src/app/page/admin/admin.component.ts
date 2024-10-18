import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../utils/types/products';
import { ProductsService } from '../../utils/services/products.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  products : Product[] =[
    {
      id: 1,
      titre: "Clean Code",
      description: "Un guide sur l'art d'écrire du code propre et maintenable, par Robert C. Martin.",
      prix: 35.99
    },
    {
      id: 2,
      titre: "The Pragmatic Programmer",
      description: "Des conseils pratiques pour améliorer les compétences en programmation, par Andrew Hunt et David Thomas.",
      prix: 42.50
    },
    {
      id: 3,
      titre: "You Don't Know JS: Scope & Closures",
      description: "Un livre qui explore en profondeur les concepts avancés de JavaScript, par Kyle Simpson.",
      prix: 27.95
    },
    {
      id: 4,
      titre: "Design Patterns: Elements of Reusable Object-Oriented Software",
      description: "Un livre classique sur les modèles de conception, par Erich Gamma et al.",
      prix: 49.99
    },
    {
      id: 5,
      titre: "Introduction to Algorithms",
      description: "Une référence complète sur les algorithmes et leur analyse, par Thomas H. Cormen et al.",
      prix: 65.00
    }
  ];
  
  constructor(private productService : ProductsService){}

  ngOnInit(): void {
    this.products = this.productService.products
  }
  
  newProduct: Pick<Product, 'titre' | 'description' | 'prix' > = {
    titre: '',
    description: '', 
    prix :0
  }

  isSubmitted: boolean = false

  get titleHasError() {
    return !this.newProduct.titre && this.isSubmitted
  }

  get descriptionHasError() {
    return !this.newProduct.description && this.isSubmitted
  }

  get prixHasError() {
    return !this.newProduct.prix && this.isSubmitted
  }

  submitNewProduct(): void {
    this.isSubmitted = true

    if(!this.descriptionHasError && !this.titleHasError && !this.prixHasError) {
      const product: Product = {
        id: this.products.length+1,
        ...this.newProduct
        
      }
      console.log(product);
      // this.products.push(product)

      this.productService.addFormation(product)
      this.newProduct.titre = ''
      this.newProduct.description = ''
      this.newProduct.prix = 0
    }
  }

  deleteProduct(product : Product): void {
    this.productService.deleteProduct(product);
  }




}
