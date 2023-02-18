import { Injectable } from '@angular/core';
import {JavaHttpService} from "../connection/http/java-http.service";
import {ItemDto} from "../connection/models/item.dto";
import {map, Observable} from "rxjs";
import {EndUserDto} from "../connection/models/end-user.dto";
import {LoginResponseDto} from "../connection/models/login-response.dto";
import {SessionDetails} from "../../internal-models/session-details";
import {SessionService} from "./session.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: JavaHttpService,
  private router: Router,
  private route: ActivatedRoute) {
  }

  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>('/item/all');
  }

  getCurrentUser(): Observable<EndUserDto> {
    return this.http.get<EndUserDto>('/user/self')
  }


  setCurrentUser() {
    this.getCurrentUser().subscribe(
      {
        complete: () => {this.router.navigate([".."],{relativeTo: this.route})},
        error: (error) => {console.log(error)},
        next: (response:EndUserDto) => {
          let categories:String[] = []
          response.collections.forEach( function(value) {
            categories.push(value.name)
          });
          localStorage.setItem("userName",response.username)
          localStorage.setItem("categories",categories.toString())
          SessionService.getInstance().currentUser = response
        }
      }
    )
  }
}
