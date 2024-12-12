package DbProject.airportRecords_1.service;

import DbProject.airportRecords_1.model.Passenger;

import java.util.List;

public interface PassengerService {
    List<Passenger> getAllPassengers();
    Passenger savePassenger(Passenger passenger);
}

