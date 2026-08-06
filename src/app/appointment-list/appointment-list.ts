import { Component, OnInit } from '@angular/core';

import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit {

  newAppointmentTitle: string = '';
  newAppointmentDate: string = '';

  appointments: Appointment[] = [];

  constructor(
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe({
      next: (appointments) => {
        this.appointments = appointments;
      },
      error: (error) => {
        console.error('Appointments could not be loaded:', error);
      }
    });
  }

  addAppointment(): void {
    if (
      this.newAppointmentTitle.trim().length === 0 ||
      this.newAppointmentDate.length === 0
    ) {
      return;
    }

    const newAppointment: Appointment = {
      title: this.newAppointmentTitle,
      appointmentDate: this.newAppointmentDate
    };

    this.appointmentService.createAppointment(newAppointment).subscribe({
      next: (createdAppointment) => {
        this.appointments = [
          ...this.appointments,
          createdAppointment
        ];

        this.newAppointmentTitle = '';
        this.newAppointmentDate = '';
      },
      error: (error) => {
        console.error('Appointment could not be created:', error);
      }
    });
  }

  deleteAppointment(appointment: Appointment): void {
    if (appointment.id === undefined) {
      return;
    }

    this.appointmentService.deleteAppointment(appointment.id).subscribe({
      next: () => {
        this.appointments = this.appointments.filter(
          currentAppointment => currentAppointment.id !== appointment.id
        );
      },
      error: (error) => {
        console.error('Appointment could not be deleted:', error);
      }
    });
  }
}