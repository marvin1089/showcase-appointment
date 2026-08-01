package de.marv.showcase.appointment.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import de.marv.showcase.appointment.api.entity.Appointment;
import de.marv.showcase.appointment.api.repository.AppointmentRepository;

@Service

public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
}