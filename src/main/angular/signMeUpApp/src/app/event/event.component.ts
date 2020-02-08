import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent  {
  @Input()
  eventToDisplay : string;
  id: number;
  name: string;
  date : string;
  place : string;
  status : boolean;
  constructor() { }



}
