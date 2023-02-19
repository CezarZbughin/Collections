import {EndUserDto} from "./end-user.dto";
import {Tag} from "./tag";
import {ItemCollectionDto} from "./item-collection.dto";

export class ItemDto {
  id: number = 0
  name: string = '';
  description: string = '';
  status: Status = Status.notForSale;
  collection: ItemCollectionDto = new ItemCollectionDto();
  tags: Tag[] = [];
  likes: EndUserDto[] = [];


  constructor(id: number, name: string, description: string, status: Status, collection: ItemCollectionDto, tags: Tag[], likes: EndUserDto[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.collection = collection;
    this.tags = tags;
    this.likes = likes;
  }
}

export enum Status {
  forSale = 'FOR_SALE',
  notForSale = 'NOT_FOR_SALE',
}
