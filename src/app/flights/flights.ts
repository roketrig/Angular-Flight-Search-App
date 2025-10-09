// src/app/flights/flights.ts
import { Component, OnInit } from '@angular/core';
import { OpenskyService } from '../opensky';

@Component({
  selector: 'app-flights',
  standalone: false,
  templateUrl: './flights.html',
  styleUrls: ['./flights.css']
})
export class Flights implements OnInit {
  flights: any[] = [];
  searchText: string = '';

  constructor(private opensky: OpenskyService) { }
  ngOnInit() {
    this.opensky.getAllStates().subscribe((data: any) => {
      this.flights = data.states;
    });
  }

  trackByFlightId(index: number, flights: any): string{
    return flights[1];
  }

  searchFlights() {
    if(this.searchText.trim() === '') {
      if (this.searchText === '') {
        
      }
    }
}
}