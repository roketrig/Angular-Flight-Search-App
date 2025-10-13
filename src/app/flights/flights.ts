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

searchFlights(airCraftId: string) {
  const trimmedAirCraftId = airCraftId.trim().toLowerCase();
  if (trimmedAirCraftId === '') {
    this.selectedFlight = null;
    return;
  }

  const flight = this.flights.find(flight =>
    flight[1] && flight[1].trim().toLowerCase() === trimmedAirCraftId
  );

  if (flight) {
    this.selectedFlight = {
      icao24: flight[0],
      callsign: flight[1],
      origin_country: flight[2],
      time_position: flight[3],
      last_contact: flight[4],
      longitude: flight[5],
      latitude: flight[6],
      baro_altitude: flight[7],
      on_ground: flight[8],
      velocity: flight[9],
      heading: flight[10],
      vertical_rate: flight[11],
      sensors: flight[12],
      geo_altitude: flight[13],
      squawk: flight[14],
      spi: flight[15],
      position_source: flight[16]
    };
  } else {
    this.selectedFlight = null;
  }
}
}


//TVF37HQ