package DbProject.airportRecords_1.service.impl;

import DbProject.airportRecords_1.model.Airport;
import DbProject.airportRecords_1.repository.AirportRepository;
import DbProject.airportRecords_1.service.AirportService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportServiceImpl implements AirportService {

    private final AirportRepository airportRepository;

    public AirportServiceImpl(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }

    @Override
    public List<Airport> getAllAirports() {
        return airportRepository.findAll();
    }

    @Override
    public Airport saveAirport(Airport airport) {
        return airportRepository.save(airport);
    }
}
