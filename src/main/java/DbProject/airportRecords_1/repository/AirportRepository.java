package DbProject.airportRecords_1.repository;

import DbProject.airportRecords_1.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airport, Long> {
}
