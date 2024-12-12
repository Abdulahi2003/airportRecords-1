package DbProject.airportRecords_1.service;

import DbProject.airportRecords_1.model.Booking;

import java.util.List;

public interface BookingService {
    List<Booking> getAllBookings();
    Booking saveBooking(Booking booking);
}
