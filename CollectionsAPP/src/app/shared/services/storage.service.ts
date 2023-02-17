import { Injectable } from '@angular/core';
import {SessionDetails} from "../../internal-models/session-details";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public currentSession: SessionDetails

  saveUserData(currentSession: SessionDetails): void {

    localStorage.setItem('id',currentSession.userId.toString());
    localStorage.setItem('username',currentSession.username);
    localStorage.setItem('authToken',currentSession.authToken);
    localStorage.setItem('isAdmin',currentSession.isAdmin.toString());
    localStorage.setItem('isLoggedIn',currentSession.isLoggedIn.toString());

    this.currentSession = currentSession;

  }

}
