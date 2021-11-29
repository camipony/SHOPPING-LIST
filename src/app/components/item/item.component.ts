
import { Item } from './../../models/item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item(); //Inicializar un objeto
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(item: Item){
  this.deleteItem.emit(item);
  }
}
