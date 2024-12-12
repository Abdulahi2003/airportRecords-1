package DbProject.airportRecords_1.repository;

import DbProject.airportRecords_1.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}
