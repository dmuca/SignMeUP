import {Component, OnInit} from '@angular/core';
import {EventComponent} from '../event/event.component';
import {Events} from "../mock_event";
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events = Events;
  eventsList;

  constructor() { }

  ngOnInit() {
    this.eventsList = [{'name':'test1'},
      {'name':'test2'},
      {'name':'test3'}];
  }
}
