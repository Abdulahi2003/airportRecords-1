package DbProject.airportRecords_1.service;

import DbProject.airportRecords_1.model.Flight;

import java.util.List;

public interface FlightService {
    List<Flight> getAllFlights();
    Flight saveFlight(Flight flight);
}

