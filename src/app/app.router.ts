import { PeopleListComponent } from './pages/people-list/people-list.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { Erro404PageComponent } from './pages/erro-404-page/erro-404-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
    //home 
    {
        path: '',
        component: HomePageComponent
    },
    //Produts
    {
        path: 'products',
        component: ProductsPageComponent
    },
    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },
    //About
    {
        path: 'about',
        component: AboutPageComponent
    },
    //People
    {
        path: 'people',
        component: PeopleListComponent
    },
    //error 404
    {
        path: '**',
        component: Erro404PageComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes);
