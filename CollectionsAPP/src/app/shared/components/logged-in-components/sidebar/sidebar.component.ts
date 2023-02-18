import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {ItemDto} from "../../../connection/models/item.dto";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  items: ItemDto[];

  addItem() {
    this.router.navigate(['./item/add'],{relativeTo: this.route})
  }

  getItems() {

  }


}
