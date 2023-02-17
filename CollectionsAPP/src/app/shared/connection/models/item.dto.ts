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
}

export enum Status {
  forSale = 'FOR_SALE',
  notForSale = 'NOT_FOR_SALE',
}
