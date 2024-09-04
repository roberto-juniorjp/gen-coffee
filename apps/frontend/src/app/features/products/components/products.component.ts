import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: any[] = [];
  errorMessage: string | null = null;
  searchTerm: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjU0NTgyMjMsImV4cCI6MTc1Njk5NDIyMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ylve7-AXHN5GXG5KkWSpJkw0V0JdwELS3TFGAEVDfkE'; // Token atualizado
    this.apiService.setToken(token); // Define o token

    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.filterProducts(this.searchTerm);
        if (this.products.length === 0) {
          this.errorMessage = 'No products available.';
        } else {
          this.errorMessage = null;
        }
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.errorMessage = 'Error fetching products';
      }
    });

    this.apiService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        if (this.categories.length === 0) {
          this.errorMessage = 'No categories available.';
        } else {
          this.errorMessage = null;
        }
      },
      error: (err) => {
        console.error('Error fetching categories', err);
        this.errorMessage = 'Error fetching categories';
      }
    });
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filteredProducts = this.filterProducts(searchTerm);
  }

  private filterProducts(term: string): any[] {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
