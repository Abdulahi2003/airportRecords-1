package DbProject.airportRecords_1.repository;

import DbProject.airportRecords_1.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}

