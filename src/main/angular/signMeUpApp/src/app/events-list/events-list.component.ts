import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  eventsList;

  constructor() { }

  ngOnInit() {
    this.eventsList = [{'name':'test1'}, {'name':'test2'}, {'name':'test3'}];
  }

}
