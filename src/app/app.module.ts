import { MenuService } from './providers/menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.router'
import { NgModule } from '@angular/core';

import { PeopleService } from './providers/people.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { SearchbarComponent } from './componentes/searchbar/searchbar.component';
import { CartbarComponent } from './componentes/cartbar/cartbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ProductCardComponent } from './componentes/product-card/product-card.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { Erro404PageComponent } from './pages/erro-404-page/erro-404-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    SearchbarComponent,
    CartbarComponent,
    BannerComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    Erro404PageComponent,
    AboutPageComponent,
    PeopleListComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [PeopleService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
