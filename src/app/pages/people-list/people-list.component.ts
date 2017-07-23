import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'app/providers/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass']
})
export class PeopleListComponent implements OnInit {

  tabs: any[] = [
    {
      name: 'Pictures'
    },
    {
      name: 'Music'
    },
    {
      name: 'Videos'
    },
    {
      name: 'Documents'
    },
  ]

  constructor(public people: PeopleService) { }

  ngOnInit() {

  }

}
