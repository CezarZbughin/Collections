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
    window.location.reload()
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

}
