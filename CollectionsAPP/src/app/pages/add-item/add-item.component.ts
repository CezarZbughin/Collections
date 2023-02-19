import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {JavaHttpService} from "../../shared/connection/http/java-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tag} from "../../shared/connection/models/tag";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Status} from "../../shared/connection/models/item.dto";

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
    status: new FormControl('',[Validators.required])
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
    console.log("Yas")
      let name = this.form.controls.name.value ?? "";
      let description = this.form.controls.description.value ?? "";
      let status = (this.form.controls.status.value ?? Status.notForSale) == "FOR_SALE" ? Status.forSale : Status.notForSale;

      console.log(status)

    

  }
}
