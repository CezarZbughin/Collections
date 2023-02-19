import { Component } from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logOut() {
    SessionService.getInstance().clearSession()
    this.router.navigate([".."])
  }

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {
  }

  onNotificationClick() {
    this.router.navigate(["../notifications"])
  }

  onHomeClick() {
    this.router.navigate([".."])
  }
}
