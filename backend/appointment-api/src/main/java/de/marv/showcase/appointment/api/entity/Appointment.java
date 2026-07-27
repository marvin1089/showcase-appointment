package de.marv.showcase.appointment.api.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private LocalDate appointmentDate;

    public Appointment() {}

    public Appointment(Long id, String title, LocalDate appointmentDate) {
        this.id = id;
        this.title = title;
        this.appointmentDate = appointmentDate;
    }


}



