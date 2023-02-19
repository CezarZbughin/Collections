import {Component, OnInit} from '@angular/core';
import {ItemDto} from "../../shared/connection/models/item.dto";
import {DataService} from "../../shared/services/data.service";
import {LoginResponseDto} from "../../shared/connection/models/login-response.dto";
import {SessionDetails} from "../../internal-models/session-details";
import {SessionService} from "../../shared/services/session.service";
import {JavaHttpService} from "../../shared/connection/http/java-http.service";
import {ResponseMessage} from "../../shared/connection/models/response-message";
import {considerSettingUpAutocompletion} from "@angular/cli/src/utilities/completion";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  items: ItemDto[]

  constructor(
    private dataService: DataService,
    private http: JavaHttpService) {
  }

  ngOnInit(): void{
      this.dataService.setCurrentUser(false)
      this.dataService.getAllItems().subscribe({
      complete: () => {
        console.log("Not here")
      },
      error: (error) => {
        console.log(error)
      },
      next: (response : ItemDto[]) => {
        this.items = response
        console.log(response)
      }
    });
  }

  print(tag: string) {
    console.log(tag)
  }

  getItemId(i: number): number {
      return (this.items.at(i) ?? new ItemDto()).id ?? 0 ;
  }

  isLikedItem(i: number): boolean {
      return SessionService.getInstance().currentUser.likedItems.includes(this.getItemId(i));
  }

  unlike(i: number) {
    this.http.post<ResponseMessage,string>('/user/unlike-item/id='+this.getItemId(i),"").subscribe({
      complete:() => {window.location.reload()},
      error: (error) => {console.log(error)},
      next: (value) => {console.log(value)}
    });
  }

  like(i: number) {
    this.http.post<ResponseMessage,string>('/user/like-item/id='+this.getItemId(i),"").subscribe({
      complete:() => {window.location.reload()},
      error: (error) => {console.log(error)},
      next: (value) => {console.log(value)}
    });
  }

}
