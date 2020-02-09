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
    this.eventsList = [
      {
        'id':'1',
        'name':'Kawa z dr Stępniem',
        'date':'15-02-2020',
        'place':'UP, Sala 401',
      },
      {
        'id':'2',
        'name':'Piknik Krakowski',
        'date':'20-04-2020',
        'place':'Kraków, Rynek Główny',
      },
      {
        'id':'3',
        'name':'Dzień otwarty UP',
        'date':'20-09-2020',
        'place':'Uniwersytet Pedagogiczny',
      },
      ];
  }
}
