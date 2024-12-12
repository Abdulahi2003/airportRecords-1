package DbProject.airportRecords_1.repository;

import DbProject.airportRecords_1.model.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {
}
