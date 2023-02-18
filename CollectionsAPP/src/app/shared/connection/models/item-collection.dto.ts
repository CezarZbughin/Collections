import {EndUserDto} from "./end-user.dto";
import {ItemDto} from "./item.dto";
import {Tag} from "./tag";

export class ItemCollectionDto {
    id: number = 0
    name: string = '';
    description: string = '';
    endUser: EndUserDto = new EndUserDto(0,"",[],[],[],"");
    items: ItemDto[] = [];
    tags: Tag[] = [];
}



