import { Component } from '@angular/core';
import {ItemDto} from "../../shared/connection/models/item.dto";
import {DataService} from "../../shared/services/data.service";
import {JavaHttpService} from "../../shared/connection/http/java-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../shared/services/session.service";
import {ResponseMessage} from "../../shared/connection/models/response-message";
import {ItemCollectionDto} from "../../shared/connection/models/item-collection.dto";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

  items: ItemDto[]

  constructor(
    private dataService: DataService,
    private http: JavaHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let collectionName = String(this.route.snapshot.paramMap.get('name'));
    this.dataService.setCurrentUser(false, () => {
      this.dataService.getCollection(collectionName).subscribe({
        complete: () => {
          console.log("We got collections")
        },
        error: (error) => {
          console.log(error)
        },
        next: (response: ItemCollectionDto) => {
          this.items = response.items
          console.log(response)
        }
      })
    });

  }
  print(tag: string) {
    console.log(tag)
  }

  getItemId(i: number): number {
    return (this.items.at(i) ?? new ItemDto()).id ?? 0 ;
  }

  isLikedItem(i: number): boolean {
    if((localStorage.getItem("isLoggedIn") ?? "false") === "true"){
      return SessionService.getInstance().currentUser.likedItems.includes(this.getItemId(i));
    } else {
      return false
    }
  }

  unlike(i: number) {
    if((localStorage.getItem("isLoggedIn") ?? "false") === "true"){
      this.http.post<ResponseMessage,string>('/user/unlike-item/id='+this.getItemId(i),"").subscribe({
        complete:() => {window.location.reload()},
        error: (error) => {console.log(error)},
        next: (value) => {console.log(value)}
      });} else {
      this.router.navigate(["../login"],{relativeTo: this.route})
    }
  }

  like(i: number) {
    if((localStorage.getItem("isLoggedIn") ?? "false") === "true"){
      this.http.post<ResponseMessage,string>('/user/like-item/id='+this.getItemId(i),"").subscribe({
        complete:() => {window.location.reload()},
        error: (error) => {console.log(error)},
        next: (value) => {console.log(value)}
      });} else {
      this.router.navigate(["../login"],{relativeTo: this.route});
    }
  }

  isOwnedByCurrentUser(itemCollectionId: number): boolean {
    console.log(SessionService.getInstance().currentUser + "Blaablas");
    return SessionService.getInstance().currentUser.collections.map(collection => collection.id).includes(itemCollectionId);
  }
}
