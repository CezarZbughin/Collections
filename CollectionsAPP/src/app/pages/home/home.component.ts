import {Component, OnInit} from '@angular/core';
import {ItemDto} from "../../shared/connection/models/item.dto";
import {DataService} from "../../shared/services/data.service";
import {LoginResponseDto} from "../../shared/connection/models/login-response.dto";
import {SessionDetails} from "../../internal-models/session-details";
import {SessionService} from "../../shared/services/session.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  items: ItemDto[]

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void{

    this.dataService.getAllItems().subscribe({
      complete: () => {
      },
      error: (error) => {
        console.log(error)
      },
      next: (response : ItemDto[]) => {
        console.log(response)
      }
    });
  }




}
