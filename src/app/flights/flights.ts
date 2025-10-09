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
      this.flights = data.states || [];
      console.log(this.flights);
    });
  }



selectedFlight: any = null;

searchFlights(callsign: string) {
  const trimmedCallsign = callsign.trim().toLowerCase();
  if (trimmedCallsign === '') {
    this.selectedFlight = null;
    return;
  }

  const match = this.flights.find(flight =>
    flight[1] && flight[1].trim().toLowerCase() === trimmedCallsign
  );

  if (match) {
    this.selectedFlight = {
      icao24: match[0],
      callsign: match[1],
      origin_country: match[2],
      time_position: match[3],
      last_contact: match[4],
      longitude: match[5],
      latitude: match[6],
      baro_altitude: match[7],
      on_ground: match[8],
      velocity: match[9],
      heading: match[10],
      vertical_rate: match[11],
      sensors: match[12],
      geo_altitude: match[13],
      squawk: match[14],
      spi: match[15],
      position_source: match[16]
    };
  } else {
    this.selectedFlight = null;
  }
}
}


//TVF37HQ