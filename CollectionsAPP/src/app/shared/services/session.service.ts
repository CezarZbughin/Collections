import { Injectable } from '@angular/core';
import {SessionDetails} from "../../internal-models/session-details";

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  private static shared: SessionService;

  public currentSession: SessionDetails

  private constructor() {
  }

  public static getInstance(): SessionService
  {
    if(!SessionService.shared){
      SessionService.shared = new SessionService();
    }
    return SessionService.shared;
  }

  saveUserData(currentSession: SessionDetails): void {
    localStorage.setItem('username',currentSession.username);
    localStorage.setItem('authToken',currentSession.authToken);
    localStorage.setItem('isAdmin',currentSession.isAdmin.toString());
    localStorage.setItem('isLoggedIn',currentSession.isLoggedIn.toString());
    this.currentSession = currentSession;
  }

  getCurrentSession() : SessionDetails {

    let userName = localStorage.getItem('username')
    let authToken = localStorage.getItem('authToken')
    let isAdmin = localStorage.getItem('isAdmin')
    let isLoggedIn = localStorage.getItem('isLoggedIn')

    return new SessionDetails(
      userName == null ? "" : userName,
      authToken == null ? "" : authToken,
      isLoggedIn ==  null ? false : (isLoggedIn === 'true'),
      isAdmin == null ? false : (isAdmin === 'true')
    )
  }

  clearSession() {
    localStorage.clear();
  }

}
