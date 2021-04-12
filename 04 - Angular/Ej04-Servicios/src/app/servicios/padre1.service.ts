import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Padre1Service {

  constructor() { 
    console.log("Creando Padre1Service");
  }
}
