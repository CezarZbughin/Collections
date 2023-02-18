import { Injectable } from '@angular/core';
import {JavaHttpService} from "../connection/http/java-http.service";
import {ItemDto} from "../connection/models/item.dto";
import {Observable} from "rxjs";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: JavaHttpService) {
  }

  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>('/item/all');
  }

}
