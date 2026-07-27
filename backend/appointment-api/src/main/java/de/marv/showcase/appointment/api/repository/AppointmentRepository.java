package de.marv.showcase.appointment.api.repository;


import de.marv.showcase.appointment.api.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
