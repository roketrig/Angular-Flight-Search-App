// src/app/flights/flights.ts
import { Component, OnInit } from '@angular/core';
import { OpenskyService } from '../opensky';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.html',
  styleUrls: ['./flights.css']
})
export class Flights implements OnInit {
  flights: any[] = [];

  constructor(private opensky: OpenskyService) { }
  ngOnInit() {
    this.opensky.getAllStates().subscribe((data: any) => {
      this.flights = data.states;
      console.log(this.flights);
    });
  }
}