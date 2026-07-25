package de.marv.showcase.appointment.api.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @GetMapping
    public List<AppointmentResponse> getAppointments() {

        return List.of(
                new AppointmentResponse(
                        1L,
                        "Testtermin",
                        LocalDate.of(2026, 7, 25)
                )
        );
    }

    public record AppointmentResponse(
            Long id,
            String title,
            LocalDate appointmentDate
    ) {
    }
}