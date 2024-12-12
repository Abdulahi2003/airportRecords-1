package DbProject.airportRecords_1.service;

import DbProject.airportRecords_1.model.Airport;

import java.util.List;

public interface AirportService {
    List<Airport> getAllAirports();
    Airport saveAirport(Airport airport);
}
