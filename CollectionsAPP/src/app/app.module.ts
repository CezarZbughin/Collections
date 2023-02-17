import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemService} from "./item.service";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import {AlertModule} from "ngx-bootstrap/alert";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { PageWrapperComponent } from './shared/components/page-wrapper/page-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ItemDetailsComponent,
    ChatComponent,
    AddItemComponent,
    PageWrapperComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
