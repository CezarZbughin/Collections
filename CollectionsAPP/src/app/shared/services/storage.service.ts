import { Injectable } from '@angular/core';
import {EndUserDto} from "../connection/models/end-user.dto";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public user: EndUserDto = new EndUserDto();

  saveUserData(user: EndUserDto): void {

    localStorage.setItem('id',user.id.toString());
    localStorage.setItem('username',user.username);
    localStorage.setItem('password',user.password);
    localStorage.setItem('token',user.token);

    this.user.id = user.id;
    this.user.username = user.username;
    this.user.password = user.password;

  }

  constructor() { }
}
