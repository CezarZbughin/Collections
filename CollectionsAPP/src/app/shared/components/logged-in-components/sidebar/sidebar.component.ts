import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {ItemDto} from "../../../connection/models/item.dto";
import {SessionService} from "../../../services/session.service";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  items: ItemDto[];
  categories: String[];

  ngOnInit(): void {
    this.dataService.setCurrentUser(false, () =>{
      console.log(SessionService.getInstance().currentUser)

      let cachedUsername = localStorage.getItem("userName");
      this.userName = cachedUsername ? cachedUsername: "";

      let cachedCategories = localStorage.getItem("categories");
      this.categories = cachedCategories ? cachedCategories.split(","): [];
    })
  }

  addItem() {
    this.router.navigate(['../item/add'], {relativeTo: this.route})
  }

  navigateToMessages() {
    this.router.navigate(['../chat'])
  }

  redirectToCatergory(category: String) {
    console.log("Here")
    this.router.navigate(['../collection/'+category],{
      onSameUrlNavigation:"reload"
    })
  }
}
