import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {JavaHttpService} from "../../shared/connection/http/java-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TagDefinition} from "@angular/compiler";
import {Tag} from "../../shared/connection/models/tag";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemDto} from "../../shared/connection/models/item.dto";
import {SessionService} from "../../shared/services/session.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{

  tags: Tag[]
  addedTags: Tag[] = []
  message: string = ""
  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
    description: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required])
  });

  constructor(
    private dataService: DataService,
    private http: JavaHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.dataService.getAllTags().subscribe({
      complete: () => {console.log("Got all tags")},
      error: (error) => {console.log(error)},
       next: (result:Tag[]) => {this.tags = result}
    })
  }


  addTag(tag: Tag) {
    this.addedTags.push(tag);
    this.tags = this.tags.filter(entry => entry.id !== tag.id);
  }

  remove(tag: Tag) {
    this.tags.push(tag);
    this.addedTags = this.addedTags.filter(entry => entry.id !== tag.id);
  }

  onAddItem() {
    // let item = new ItemDto(form)

  }
}
