import { Item} from "./item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private apiServerUrl = environment.apiBasUrl;
  constructor(private http: HttpClient) {
  }

  public getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(`${this.apiServerUrl}/items`);
  }

  public addItem(collection: Item): Observable<Item>{
    return this.http.post<Item>(`${this.apiServerUrl}/collections/add`, collection);
  }
}
