import {Component, OnInit} from '@angular/core';
import {ItemService} from "./item.service";
import {Item} from "./item";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements  OnInit {

  public items: Item[];

  constructor (private itemService: ItemService){}

  ngOnInit() {
    this.getItems();
  }

  public getItems(): void {
    this.itemService.getItems().subscribe(
      (response: Item[]) => {
        this.items = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
