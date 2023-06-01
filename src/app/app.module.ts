import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ImgSrcPipe } from './img-src.pipe';
import { CartsComponent } from './carts/carts.component';
import { MyRoute } from './MyRoute';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './intercaptors/loader.interceptor';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { AuthGuard } from './Guard/auther.guard';
import { AuthInterceptor } from './InterCeptor/auther.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductsComponent,
    ImgSrcPipe,
    CartsComponent,
    RegisterComponent,
    LoginComponent,
    AddProductsComponent,
    LoaderComponent,
    EditProdComponent,
  ],
  imports: [
    BrowserModule,
    MyRoute,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
