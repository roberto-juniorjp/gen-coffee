import { ProductsComponent } from './features/products/components/products.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: '**', redirectTo: '' }
];
