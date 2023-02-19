import { Injectable } from '@angular/core';
import {JavaHttpService} from "../connection/http/java-http.service";
import {ItemDto} from "../connection/models/item.dto";
import {map, Observable} from "rxjs";
import {EndUserDto} from "../connection/models/end-user.dto";
import {LoginResponseDto} from "../connection/models/login-response.dto";
import {SessionDetails} from "../../internal-models/session-details";
import {SessionService} from "./session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChatMessageDto} from "../connection/models/chat-message.dto";
import {ResponseMessage, SentMessageDto} from "../connection/models/response-message";
<<<<<<< HEAD
import { NotificationDto } from '../connection/models/notification.dto';
=======
import {ItemCollectionDto} from "../connection/models/item-collection.dto";
>>>>>>> 254b1233cc3f085d0db18440113571aa15105c99

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: JavaHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>('/item/all');
  }

  getFeed(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>('/user/feed');
  }

  getCurrentUser(): Observable<EndUserDto> {
    return this.http.get<EndUserDto>('/user/self')
  }

  setCurrentUser(redirect: boolean, completionHandler: Function = () => {}) {
    this.getCurrentUser().subscribe(
      {
        complete: () => { if(redirect) {this.router.navigate([".."],{relativeTo: this.route})}
                            completionHandler()},
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

  getContacts() {
    return this.http.get<EndUserDto[]>('/message/get-users')
  }

  getMessageWith(otherUser: number) {
    return this.http.get<ChatMessageDto[]>('/message/find/with='+otherUser)
  }

  sendMessage(id: number, message: string): Observable<ResponseMessage> {
    let sentMessage = new SentMessageDto(message)
    return this.http.post<ResponseMessage, SentMessageDto>('/message/send/receiver='+id, sentMessage)
  }

<<<<<<< HEAD
  getNotifications() {
    return this.http.get<NotificationDto[]>('/notification/find/limit=30');
  }

=======
  getCollection(collectionName: string): Observable<ItemCollectionDto> {
    console.log(collectionName)
    let path = '/collection/find/name='+collectionName
    console.log(path)
    return this.http.get<ItemCollectionDto>(path)
  }
>>>>>>> 254b1233cc3f085d0db18440113571aa15105c99
}
