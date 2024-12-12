package DbProject.airportRecords_1.service.impl;

import DbProject.airportRecords_1.model.Flight;
import DbProject.airportRecords_1.repository.FlightRepository;
import DbProject.airportRecords_1.service.FlightService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightServiceImpl implements FlightService {

    private final FlightRepository flightRepository;

    public FlightServiceImpl(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    @Override
    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    @Override
    public Flight saveFlight(Flight flight) {
        return flightRepository.save(flight);
    }
}
