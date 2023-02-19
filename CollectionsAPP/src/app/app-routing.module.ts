import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ItemDetailsComponent} from "./pages/item-details/item-details.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {AddItemComponent} from "./pages/add-item/add-item.component";
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'item/details',
    component: ItemDetailsComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'item/add',
    component: AddItemComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
