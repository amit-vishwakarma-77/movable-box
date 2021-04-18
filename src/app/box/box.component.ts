import { Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';
import { boxProp } from '../../app/interfaces/interfaces';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  
  @Input() boxDetails:any ;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}
  
  ngOnInit(): void {
  }
  
  changeColor(){
    this.newItemEvent.emit(this.boxDetails.boxNo);
  }

























}
