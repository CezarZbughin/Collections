import { Injectable } from '@angular/core';
import {JavaHttpService} from "../connection/http/java-http.service";
import {ItemDto} from "../connection/models/item.dto";
import {Observable} from "rxjs";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private http: JavaHttpService;

  constructor() {
    this.http.httpOptions = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SessionService.getInstance().getCurrentSession().authToken}`,
    });
  }

  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>('item/all');
  }

}
