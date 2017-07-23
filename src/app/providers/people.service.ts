import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  data: any[] = 
  [
    {
      "age": 23,
      "name": "Harrell Howe"
    },
    {
      "age": 37,
      "name": "Lorene Oneill"
    },
    {
      "age": 39,
      "name": "Fuentes Ramos"
    },
    {
      "age": 32,
      "name": "Nettie Serrano"
    },
    {
      "age": 36,
      "name": "Gracie Chang"
    },
    {
      "age": 28,
      "name": "Lola Martin"
    },
    {
      "age": 39,
      "name": "Sylvia Floyd"
    },
    {
      "age": 29,
      "name": "Trisha Aguilar"
    }
  ]

  constructor() { }

}
