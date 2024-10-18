import { Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { AdminComponent } from './page/admin/admin.component';
import { PanierComponent } from './page/panier/panier.component';

export const routes: Routes = [
    {path : '', component: AccueilComponent},
    {path : 'admin', component: AdminComponent},
    {path : 'panier', component: PanierComponent},
];
